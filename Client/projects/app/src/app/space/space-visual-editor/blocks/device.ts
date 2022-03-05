import { Blockly } from 'ngx-blockly';

const colour = '#3264e1';
const colour2 = '#698a8a';
const baseHelpUrl = 'https://pro.autojs.org/docs/#/zh-cn/device?id=';

Blockly.defineBlocksWithJsonArray([
  {
    type: 'device_width',
    message0: '设备屏幕分辨率宽度',
    output: 'Number',
    colour: colour2,
    tooltip: '设备屏幕分辨率宽度例如1080',
    helpUrl: baseHelpUrl + 'devicewidth',
  },
  {
    type: 'device_height',
    message0: '设备屏幕分辨率高度',
    output: 'Number',
    colour: colour2,
    tooltip: '设备屏幕分辨率高度例如1920',
    helpUrl: baseHelpUrl + 'deviceheight',
  },
  {
    type: 'device_build_id',
    message0: '修订版本号',
    output: 'String',
    colour: colour2,
    tooltip: '修订版本号，或者诸如"M4-rc20"的标识',
    helpUrl: baseHelpUrl + 'devicebuildid',
  },
  {
    type: 'device_broad',
    message0: '设备的主板型号',
    output: 'String',
    colour: colour2,
    tooltip: '设备的主板型号',
    helpUrl: baseHelpUrl + 'devicebroad',
  },
  {
    type: 'device_brand',
    message0: '厂商品牌',
    output: 'String',
    colour: colour2,
    tooltip: '与产品或硬件相关的厂商品牌，如"Xiaomi", "Huawei"等',
    helpUrl: baseHelpUrl + 'devicebrand',
  },
  {
    type: 'device_device',
    message0: '设备在工业设计中的名称',
    output: 'String',
    colour: colour2,
    tooltip: '设备在工业设计中的名称',
    helpUrl: baseHelpUrl + 'devicedevice',
  },
  {
    type: 'device_model',
    message0: '设备型号',
    output: 'String',
    colour: colour2,
    tooltip: '设备型号',
    helpUrl: baseHelpUrl + 'devicemodel',
  },
  {
    type: 'device_product',
    message0: '产品名称',
    output: 'String',
    colour: colour2,
    tooltip: '整个产品的名称',
    helpUrl: baseHelpUrl + 'deviceproduct',
  },
  {
    type: 'device_bootloader',
    message0: '设备Bootloader的版本',
    output: 'String',
    colour: colour2,
    tooltip: '设备Bootloader的版本',
    helpUrl: baseHelpUrl + 'devicebootloader',
  },
  {
    type: 'device_hardware',
    message0: '设备的硬件名称',
    output: 'String',
    colour: colour2,
    tooltip: '设备的硬件名称(来自内核命令行或者/proc)',
    helpUrl: baseHelpUrl + 'devicehardware',
  },
  {
    type: 'device_fingerprint',
    message0: '构建唯一标识码',
    output: 'String',
    colour: colour2,
    tooltip: '构建(build)的唯一标识码',
    helpUrl: baseHelpUrl + 'devicefingerprint',
  },
  {
    type: 'device_serial',
    message0: '硬件序列号',
    output: 'String',
    colour: colour2,
    tooltip: '硬件序列号',
    helpUrl: baseHelpUrl + 'deviceserial',
  },
  {
    type: 'device_sdk_int',
    message0: '安卓系统API版本',
    output: 'String',
    colour: colour2,
    tooltip: '安卓系统API版本。例如安卓4.4的sdkInt为19。',
    helpUrl: baseHelpUrl + 'devicesdkint',
  },
  {
    type: 'device_incremental',
    message0: '源代码管理内部值',
    output: 'Number',
    colour: colour2,
    tooltip:
      '底层源代码管理用来表示此生成的内部值。例如，某次更改列表编号或git哈希。',
    helpUrl: baseHelpUrl + 'deviceincremental',
  },
  {
    type: 'device_release',
    message0: 'Android系统版本号',
    output: 'String',
    colour: colour2,
    tooltip: 'Android系统版本号。例如"5.0", "7.1.1"。',
    helpUrl: baseHelpUrl + 'devicerelease',
  },
  {
    type: 'device_base_os',
    message0: '构建产品所基于的基本操作系统',
    output: 'String',
    colour: colour2,
    tooltip: '构建产品所基于的基本操作系统。',
    helpUrl: baseHelpUrl + 'devicebaseos',
  },
  {
    type: 'device_security_patch',
    message0: '安全补丁程序级别',
    output: 'String',
    colour: colour2,
    tooltip: '安全补丁程序级别',
    helpUrl: baseHelpUrl + 'devicesecuritypatch',
  },
  {
    type: 'device_codename',
    message0: '开发代号',
    output: 'String',
    colour: colour2,
    tooltip: '开发代号，例如发行版是"REL"。',
    helpUrl: baseHelpUrl + 'devicecodename',
  },
  {
    type: 'device_get_imei',
    message0: '设备的IMEI',
    output: 'String',
    colour: colour2,
    tooltip: '设备的IMEI.',
    helpUrl: baseHelpUrl + 'devicegetimei',
  },
  {
    type: 'device_get_android_id',
    message0: '设备的AndroidID',
    output: 'String',
    colour: colour2,
    tooltip: '设备的Android ID.',
    helpUrl: baseHelpUrl + 'devicegetandroidid',
  },
  {
    type: 'device_get_mac_address',
    message0: '设备的Mac地址',
    output: 'String',
    colour: colour2,
    tooltip:
      '返回设备的Mac地址。该函数需要在有WLAN连接的情况下才能获取，否则会返回null。',
    helpUrl: baseHelpUrl + 'devicegetmacaddress',
  },
  {
    type: 'device_get_brightness',
    message0: '当前的亮度',
    output: 'Number',
    colour: colour,
    tooltip: '返回当前的(手动)亮度。范围为0~255。',
    helpUrl: baseHelpUrl + 'devicegetbrightness',
  },
  {
    type: 'device_get_brightness_mode',
    message0: '当前亮度模式',
    output: 'Number',
    colour: colour,
    tooltip: '返回当前亮度模式，0为手动亮度，1为自动亮度。',
    helpUrl: baseHelpUrl + 'devicegetbrightnessmode',
  },
  {
    type: 'device_set_brightness',
    message0: '设置当前亮度 %1',
    args0: [{ type: 'input_value', name: 'BRIGHTNESS', check: 'Number' }],
    colour: colour,
    tooltip:
      '设置当前手动亮度，范围0~255。如果当前是自动亮度模式，该函数不会影响屏幕的亮度。\n    此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。',
    helpUrl: baseHelpUrl + 'devicesetbrightnessb',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'device_set_brightness_mode',
    message0: '设置当前亮度模式 %1',
    args0: [{ type: 'input_value', name: 'BRIGHTNESS_MODE', check: 'Number' }],
    colour: colour,
    tooltip:
      '设置当前亮度模式，0为手动，1为自动。\n    此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。',
    helpUrl: baseHelpUrl + 'devicesetbrightnessmodemode',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'device_get_music_volume',
    message0: '返回当前媒体音量',
    output: 'Number',
    colour: colour,
    tooltip: '返回当前媒体音量，范围0~255',
    helpUrl: baseHelpUrl + 'devicegetmusicvolume',
  },
  {
    type: 'device_get_notification_volume',
    message0: '返回当前通知音量',
    output: 'Number',
    colour: colour,
    tooltip: '返回当前通知音量，范围0~255。',
    helpUrl: baseHelpUrl + 'devicegetnotificationvolume',
  },
  {
    type: 'device_get_alarm_volume',
    message0: '返回当前闹钟音量',
    output: 'Number',
    colour: colour,
    tooltip: '返回当前闹钟音量，范围0~255。',
    helpUrl: baseHelpUrl + 'devicegetalarmvolume',
  },
  {
    type: 'device_get_music_max_volume',
    message0: '返回媒体音量的最大值。',
    output: 'Number',
    colour: colour,
    tooltip: '返回媒体音量的最大值',
    helpUrl: baseHelpUrl + 'devicegetmusicmaxvolume',
  },
  {
    type: 'get_notification_max_volume',
    message0: '返回通知音量的最大值',
    output: 'Number',
    colour: colour,
    tooltip: '返回通知音量的最大值。',
    helpUrl: baseHelpUrl + 'devicegetnotificationmaxvolume',
  },
  {
    type: 'get_alarm_max_volume',
    message0: '返回闹钟音量的最大值',
    output: 'Number',
    colour: colour,
    tooltip: '返回闹钟音量的最大值。',
    helpUrl: baseHelpUrl + 'devicegetalarmmaxvolume',
  },
  {
    type: 'device_set_music_volume',
    message0: '设置当前媒体音量 %1',
    args0: [{ type: 'input_value', name: 'VOLUME', check: 'Number' }],
    colour: colour,
    tooltip:
      '设置当前媒体音量，范围0~255。\n    此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。',
    helpUrl: baseHelpUrl + 'devicesetmusicvolumevolume',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'device_set_notification_volume',
    message0: '设置当前通知音量 %1',
    args0: [{ type: 'input_value', name: 'VOLUME', check: 'Number' }],
    colour: colour,
    tooltip:
      '设置当前通知音量，范围0~255。 \n    此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。',
    helpUrl: baseHelpUrl + 'devicesetnotificationvolumevolume',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'device_set_alarm_volume',
    message0: '设置当前闹钟音量 %1',
    args0: [{ type: 'input_value', name: 'VOLUME', check: 'Number' }],
    colour: colour,
    tooltip:
      '设置当前闹钟音量，范围0~255。 \n    此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。',
    helpUrl: baseHelpUrl + 'devicesetalarmvolumevolume',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'get_battery',
    message0: '返回当前电量百分比',
    output: 'Number',
    colour: colour,
    tooltip: '返回当前电量百分比 0.0~100.0的浮点数',
    helpUrl: baseHelpUrl + 'devicegetbattery',
  },
  {
    type: 'is_charging',
    message0: '返回设备是否正在充电',
    output: 'Boolean',
    colour: colour,
    tooltip: '返回设备是否正在充电',
    helpUrl: baseHelpUrl + 'deviceischarging',
  },
  {
    type: 'get_total_mem',
    message0: '返回设备内存总量',
    output: 'Number',
    colour: colour,
    tooltip: '返回设备内存总量，单位字节(B)。1MB = 1024 * 1024B。',
    helpUrl: baseHelpUrl + 'devicegettotalmem',
  },
  {
    type: 'get_avail_mem',
    message0: '返回设备当前可用的内存',
    output: 'Number',
    colour: colour,
    tooltip: '返回设备当前可用的内存，单位字节(B)。',
    helpUrl: baseHelpUrl + 'devicegetavailmem',
  },
  {
    type: 'is_screen_on',
    message0: '返回设备屏幕是否是亮着的',
    output: 'Boolean',
    colour: colour,
    tooltip:
      '返回设备屏幕是否是亮着的 \n 需要注意的是，类似于vivo xplay系列的息屏时钟不属于"屏幕亮着"的情况，虽然屏幕确实亮着但只能显示时钟而且不可交互，此时isScreenOn()也会返回false。',
    helpUrl: baseHelpUrl + 'deviceisscreenon',
  },
  {
    type: 'wake_up',
    message0: '唤醒设备',
    colour: colour,
    tooltip: '唤醒设备。包括唤醒设备CPU、屏幕等。可以用来点亮屏幕。',
    helpUrl: baseHelpUrl + 'devicewakeup',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'wake_up_if_needed',
    message0: '有需要则唤醒设备',
    colour: colour,
    tooltip: '如果屏幕没有点亮，则唤醒设备。',
    helpUrl: baseHelpUrl + 'devicewakeupifneeded',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'keep_screen_on',
    message0: '保持屏幕常亮 时间(ms): %1',
    args0: [{ type: 'input_value', name: 'TIMEOUT', check: 'Number' }],
    colour: colour,
    tooltip:
      '保持屏幕常亮，设置-1为永久。\n    此函数无法阻止用户使用锁屏键等正常关闭屏幕，只能使得设备在无人操作的情况下保持屏幕常亮；同时，如果此函数调用时屏幕没有点亮，则会唤醒屏幕。',
    helpUrl: baseHelpUrl + 'devicekeepscreenontimeout',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'keep_screen_dim',
    message0: '保持屏幕常亮[允许变暗省电] 时间(ms): %1',
    args0: [{ type: 'input_value', name: 'TIMEOUT', check: 'Number' }],
    colour: colour,
    tooltip:
      '保持屏幕常亮，设置-1为永久。\n 但允许屏幕变暗来节省电量。此函数可以用于定时脚本唤醒屏幕操作，不需要用户观看屏幕，可以让屏幕变暗来节省电量。',
    helpUrl: baseHelpUrl + 'devicekeepscreendimtimeout',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'cancel_keeping_awake',
    message0: '取消设备保持唤醒状态',
    colour: colour,
    tooltip:
      '取消设备保持唤醒状态。用于取消device.keepScreenOn(), device.keepScreenDim()等函数设置的屏幕常亮。',
    helpUrl: baseHelpUrl + 'devicecancelkeepingawake',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'vibrate',
    message0: '震动 时间(ms): %1',
    args0: [{ type: 'input_value', name: 'TIME', check: 'Number' }],
    colour: colour,
    tooltip:
      '保持屏幕常亮。\n 但允许屏幕变暗来节省电量。此函数可以用于定时脚本唤醒屏幕操作，不需要用户观看屏幕，可以让屏幕变暗来节省电量。',
    helpUrl: baseHelpUrl + 'devicevibratems',
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'cancel_vibration',
    message0: '取消震动',
    colour: colour,
    tooltip: '取消设备保持唤醒状态。用于取消保持震动的效果。',
    helpUrl: baseHelpUrl + 'devicecancelvibration',
    previousStatement: null,
    nextStatement: null,
  },
]);
