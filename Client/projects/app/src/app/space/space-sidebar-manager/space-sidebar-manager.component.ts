import {ComponentPortal, ComponentType} from '@angular/cdk/portal';
import {AfterViewInit, Component, Injector, OnInit} from '@angular/core';
import {SpaceState, ThemeType} from '../services/space-state.service';
import {SpaceComponent} from '../space.component';
import {SpaceSidebarConsoleComponent} from '../space-sidebar-console/space-sidebar-console.component';
import {SpaceSidebarProjectsComponent} from '../space-sidebar-projects/space-sidebar-projects.component';
import {SpaceSidebarTerminalComponent} from '../space-sidebar-terminal/space-sidebar-terminal.component';
import {SpaceDevelopService} from '../services/space-develop.service';

@Component({
  selector: 'app-space-sidebar-manager',
  templateUrl: './space-sidebar-manager.component.html',
  styleUrls: ['./space-sidebar-manager.component.less'],
})
export class SpaceSidebarManagerComponent implements OnInit, AfterViewInit {
  constructor(
    private layout: SpaceComponent,
    private developService: SpaceDevelopService,
    private state: SpaceState,
    private injector: Injector,
  ) {}

  items: SpaceSidebarEntry[] = [
    this.use({
      name: '项目',
      icon: 'folder',
      component: SpaceSidebarProjectsComponent,
      tooltip: '项目目录树状图',
      position: 'left-top',
      width: 240,
      minWidth: 160,
      isOpen: true,
      showTab: true,
    }),
    this.use({
      name: '控制台',
      icon: 'code',
      component: SpaceSidebarConsoleComponent,
      tooltip: '程序输出控制台',
      position: 'right-top',
      width: 380,
      minWidth: 220,
      isOpen: false,
      showTab: true,
    }),
    this.use({
      name: '终端',
      icon: 'control',
      component: SpaceSidebarTerminalComponent,
      tooltip: '控制终端',
      position: 'right-top',
      width: 400,
      minWidth: 220,
      isOpen: false,
      showTab: true,
    }),
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.developService.showConsole$.subscribe(() => {
      const consoleItem: SpaceSidebarEntry | undefined = this.items.find(
        (item) => item.name === '控制台',
      );
      if (consoleItem) consoleItem.isOpen = true;
    });
  }

  onChangeWidth(e: MouseEvent, item: SpaceSidebarEntry): void {
    const startX = e.clientX;
    const startW = item.width;
    document.onmousemove = (e) => {
      const endX = e.clientX;
      let finalWidth = 0;
      if (item.position.includes('left')) {
        finalWidth = startW + endX - startX;
      } else if (item.position.includes('right')) {
        finalWidth = startW - endX + startX;
      }
      if (finalWidth > item.minWidth) {
        item.width = finalWidth;
      }
      this.state.needResize$.next(false);
    };
    document.onmouseup = (e) => {
      e.stopPropagation();
      document.onmousemove = null;
      document.onmouseup = null;
      this.state.needResize$.next(true);
    };
  }

  onBtnClick(item: SpaceSidebarEntry): void {
    item.isOpen = !item.isOpen;
    this.state.needResize$.next(true);
  }

  private use<Component>(
    definition: SpaceSidebarEntry<Component>,
  ): SpaceSidebarEntry<Component> {
    const injector = Injector.create({
      parent: this.injector,
      providers: [{ provide: SpaceSidebarEntry, useValue: definition }],
    });
    const portal = new ComponentPortal(
      definition.component,
      undefined,
      injector,
    );
    definition.portal = portal;
    return definition;
  }

  getThirdBackground(): string {
    if(this.state.theme$.getValue()==ThemeType.Default){
      return '#bdbdbd'
    }else{
      return '#202020';
    }
  }
}

export abstract class SpaceSidebarEntry<Component = unknown> {
  abstract name: string;
  abstract icon: string;
  abstract component: ComponentType<Component>;
  abstract tooltip: string;
  abstract position: string;
  abstract width: number;
  abstract minWidth: number;
  abstract isOpen: boolean;
  abstract showTab: boolean;
  abstract portal?: ComponentPortal<Component>;
}
