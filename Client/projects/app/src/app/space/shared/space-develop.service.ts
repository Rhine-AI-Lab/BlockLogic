import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subject } from 'rxjs';

import { Project } from '../../common/project.class';
import { ProjectFile } from '../../common/project-file.class';
import { Sandbox, SandboxOutput } from '../../common/sandbox.class';
import { ParaUtils } from '../../common/utils/para.utils';
import {SpaceOpenMode, SpaceSaveMode} from '../common/space-modes.enums';
import { SpaceDebugService } from './space-debug.service';
import { SpaceFileService } from './space-file.service';
import {HttpClient} from "@angular/common/http";

@Injectable()
// Space区域开发相关管理服务
export class SpaceDevelopService {
  readonly project$ = new BehaviorSubject<Project>(Project.getEmptyProject());
  readonly debugEvents = this.debugService.events$;
  readonly output$ = new Subject<SandboxOutput>();
  code = '';

  private sandboxOfLastRun?: Sandbox;

  constructor(
    private debugService: SpaceDebugService,
    private fileService: SpaceFileService,
    private httpClient: HttpClient,
  ) {
    this.debugEvents
      .pipe(filter((event) => event.type == 'connect'))
      .subscribe(() => this.runFile());
  }

  init(): void{
    let source = ParaUtils.getUrlParameter("source")
    let location = ParaUtils.getUrlParameter("location")
    this.openProjectFrom(source, location)
  }

  openProjectFrom(source: string, location: string): void {
    if(location==SpaceOpenMode.LocalFile){
    }else if(location==SpaceOpenMode.LocalFolder){
    }else if(location==SpaceOpenMode.LocalZip){
    }else if(location==SpaceOpenMode.Browser){
    }else if(location==SpaceOpenMode.Device){
    }else if(location==SpaceOpenMode.Cloud){
    }else if(location==SpaceOpenMode.Public||location==''){
      if(source!=''){
        this.httpClient
          .get(source, { responseType: 'text' })
          .subscribe((code) => {
            // TODO: 打开文件内容错误
            console.log(source)
            console.log(code)
            if(source.endsWith('.js')) {
              const ps = source.split('/')
              const name = ps[ps.length - 1]
              let files: ProjectFile[] = [
                ProjectFile.makeProjectFileByCode('Project/' + name, code)
              ]
              this.openProject(new Project(files))
            }else if(source.endsWith('.json')){
              // TODO: 打开文件夹项目
            }
          });
      }else{
        this.openProject(Project.getDefaultProject())
      }
    }
  }

  openProject(project: Project): void {
    this.project$.next(project);
  }
  saveProject(mode: SpaceSaveMode): void {
    const project = this.project$.getValue();
    this.fileService.saveProject(project, mode);
  }

  runFile(): void {
    this.sandboxOfLastRun?.destroy();
    const sandbox = new Sandbox();
    sandbox.output$.subscribe({
      next: this.output$.next.bind(this.output$),
      error: this.output$.error.bind(this.output$),
    });
    sandbox.run(this.code);
    this.sandboxOfLastRun = sandbox;
  }

  connectDevice(url: string): void {
    this.debugService.connect(url);
  }
}
