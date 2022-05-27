import threading
import requests
import subprocess
import time
import os

server_ip = 'logic.autojs.org'
threads_num = 16
train_device = 'RTX-A4000'

test_mode = True
if test_mode:
    server_ip = '127.0.0.1:8000'
    threads_num = 1


def http_get(interface, params):
    return requests.get('http://%s/api/%s' % (server_ip, interface), params=params).json()

def java_time():
    return int(time.time()*1000)

def run_thread(index):
    while True:
        try:
            response = http_get('runner/get', {'msg': train_device})
        except Exception as e:
            time.sleep(1)
            continue
        if response['result'] == 201:
            time.sleep(1)
            continue
        print('T'+str(index)+' Task: '+str(response))
        if response['result'] != 200:
            continue

        task = response['value']['id']
        name = response['value']['name']
        file = 'Temp' + str(index) + '-' + name
        f = open(file, "w")
        f.write(response['value']['code'])
        f.close()

        def upload_result(type, msg, id):
            return http_get('runner/result/add', {
                'task': task,
                'id': id,
                'type': type,
                'msg': msg,
                'time': java_time()
            })

        cmd = 'python ' + file
        popen = subprocess.Popen(cmd,
                                 stdout=subprocess.PIPE,
                                 stdin=subprocess.PIPE,
                                 stderr=subprocess.PIPE,
                                 shell=True)
        upload_result('start', name, 0)
        id = 1
        continue_flag = True
        last_time = -1
        while continue_flag:
            try:
                is_err = True
                line_b = popen.stderr.read()
                if not line_b:
                    is_err = False
                    line_b = popen.stdout.readline()

                if len(line_b) != 0:
                    line = str(line_b,'UTF-8')
                    if line.endswith('\n') and len(line)>1:
                        line = line[:len(line)-1]
                    print('T'+str(index)+(' Error' if is_err else ' Output')+str(id)+': '+line)
                    threading.Thread(target=upload_result, args=('error' if is_err else 'output', line, id)).start()
                    id+=1

                if last_time==-1 and not popen.poll() is None and (is_err or len(line_b)==0):
                    last_time = time.time()
                if last_time!=-1 and last_time+0.3<time.time():
                    break
            except Exception as e:
                print('T'+str(index)+' Error'+str(id)+': '+str(e))
        upload_result('end', name, id)
        print('T'+str(index)+' TaskEnd')


def start():
    for i in range(threads_num):
        threading.Thread(target=run_thread, name="RunThread-" + str(i), args=(i,)).start()
start()

while True:
    pass
