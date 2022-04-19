import { Component, OnInit } from '@angular/core';

import { IconUtils } from '../../common/utils/icon.utils';
import { SpaceEditorMode, SpaceLayoutMode } from '../common/space-modes.enums';
import { SpaceDevelopService } from '../services/space-develop.service';
import { SpaceState } from '../services/space-state.service';
import {
  NzContextMenuService,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';
import { Clipboard } from '@angular/cdk/clipboard';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProjectFile } from '../../common/project-file.class';

@Component({
  selector: 'app-space-tab-bar',
  templateUrl: './space-tab-bar.component.html',
  styleUrls: ['./space-tab-bar.component.less'],
})
export class SpaceTabBarComponent implements OnInit {
  constructor(
    private developService: SpaceDevelopService,
    private nzContextMenuService: NzContextMenuService,
    private state: SpaceState,
    private clipboard: Clipboard,
    private notification: NzNotificationService,
  ) {}

  editorMode: SpaceEditorMode = SpaceEditorMode.Logic;
  layoutMode: SpaceLayoutMode = SpaceLayoutMode.Split;

  EditorMode = SpaceEditorMode;
  LayoutMode = SpaceLayoutMode;

  logicFile = false;

  tabs: TabItem[] = [];

  ngOnInit(): void {
    this.developService.project$.subscribe(() => {
      this.tabs.splice(0, this.tabs.length);
    });
    this.developService.targetFile$.subscribe((file) => {
      const tab = this.tabs.find((t) => t.file == file);
      this.tabs.forEach((t) => (t.selected = false));
      if (tab) {
        tab.selected = true;
      } else {
        this.tabs.push(new TabItem(file, true));
      }
      this.logicFile = file.isLogicFile();
    });
    this.developService.deleteEvent$.subscribe((v) => {
      for (const tabKey in this.tabs) {
        const tab = this.tabs[tabKey];
        if (tab.file.path == v.last) {
          const index = parseInt(tabKey);
          if (tab.selected) {
            if (this.tabs.length > 1) {
              let next =
                index > 0 ? this.tabs[index - 1] : this.tabs[index + 1];
              next.selected = true;
              this.developService.openFile(next.file.path);
            }
          }
          this.tabs.splice(index, 1);
        }
      }
    });
  }

  getTabIndexByFile(file: ProjectFile): number {
    let i = -1;
    for (const tabKey in this.tabs) {
      if (this.tabs[tabKey].file == file) {
        i = parseInt(tabKey);
        break;
      }
    }
    return i;
  }

  onEditorModeChange(mode: SpaceEditorMode): void {
    this.editorMode = mode;
    this.state.editorMode$.next(mode);
  }
  onLayoutModeChange(mode: SpaceLayoutMode): void {
    this.layoutMode = mode;
    this.state.layoutMode$.next(mode);
  }

  onTabClick(item: TabItem): void {
    this.developService.openFile(item.file.path);
  }
  onTabClose(item: TabItem): void {
    const index = this.getTabIndexByFile(item.file);
    if (index == -1) return;
    if (this.tabs.length > 1) {
      if (item.selected) {
        this.tabs.forEach((t) => (t.selected = false));
        let next = index > 0 ? this.tabs[index - 1] : this.tabs[index + 1];
        next.selected = true;
        this.developService.openFile(next.file.path);
      }
      this.tabs.splice(index, 1);
    } else {
      // this.developService.notification$.next({
      //   type: 'info',
      //   title: '至少保留一个文件',
      // });
      this.developService.project$.getValue().target = -1;
      this.tabs.splice(index, 1);
    }
  }
  onCloseOther(item: TabItem): void {
    for (const tabsKey in this.tabs) {
      if (this.tabs[tabsKey].file != item.file) {
        this.developService.closeEvent$.next(this.tabs[tabsKey].file);
        this.tabs.splice(parseInt(tabsKey), 1);
      }
    }
    if (!item.selected) {
      item.selected = true;
      this.developService.openFile(item.file.path);
    }
  }
  onCopyName(item: TabItem): void {
    this.clipboard.copy(item.file.name);
    this.notification.success('复制成功 ' + item.file.name, '');
  }
  onCopyPath(item: TabItem): void {
    this.clipboard.copy(item.file.path);
    this.notification.success('复制成功 ' + item.file.path, '');
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  getFileIcon(name: string): string {
    return IconUtils.getIconByFileName(name);
  }

  onGotoLogicMode(): void {
    if (this.developService.targetFile$.getValue().toLogicFile()) {
      this.developService.openFile(
        this.developService.targetFile$.getValue().path,
      );
    }
  }
}

class TabItem {
  file: ProjectFile;
  selected: boolean;

  constructor(file: ProjectFile, selected = false) {
    this.file = file;
    this.selected = selected;
  }
}
