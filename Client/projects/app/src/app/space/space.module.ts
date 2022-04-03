import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  ApiFill,
  BorderOutline,
  CloseOutline,
  CodeOutline,
  ControlOutline,
  FileOutline,
  FileTextOutline,
  FolderOpenOutline,
  FolderOutline,
  FullscreenExitOutline,
  FullscreenOutline,
  LeftOutline,
  MinusOutline,
  QuestionOutline,
  RightOutline,
  SaveOutline,
  UpOutline,
  VerticalAlignBottomOutline,
} from '@ant-design/icons-angular/icons';
import {
  ANGULAR_SPLIT_DEFAULT_OPTIONS,
  AngularSplitModule,
  IDefaultOptions as AngularSplitOptions,
} from 'angular-split';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { BlocklierModule } from '../blocklier/blocklier.module';
import { SharedModule } from '../shared/shared.module';
import { BtnIconComponent } from './components/btn-icon/btn-icon.component';
import { HorizontalSplitLineComponent } from './components/horizontal-split-line/horizontal-split-line.component';
import { ToolbarSplitComponent } from './components/toolbar-split/toolbar-split.component';
import { VerticalSplitLineComponent } from './components/vertical-split-line/vertical-split-line.component';
import { SpaceSidebarLayoutComponent } from './shared/space-sidebar-layout/space-sidebar-layout.component';
import { SpaceComponent } from './space.component';
import { SpaceBlockEditorComponent } from './space-block-editor/space-block-editor.component';
import { SpaceCodeEditorComponent } from './space-code-editor/space-code-editor.component';
import { SpaceHeaderComponent } from './space-header/space-header.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceSidebarConsoleComponent } from './space-sidebar-console/space-sidebar-console.component';
import { SpaceSidebarManagerComponent } from './space-sidebar-manager/space-sidebar-manager.component';
import { SpaceSidebarProjectsComponent } from './space-sidebar-projects/space-sidebar-projects.component';
import { SpaceSidebarTerminalComponent } from './space-sidebar-terminal/space-sidebar-terminal.component';
import { SpaceStatusBarComponent } from './space-status-bar/space-status-bar.component';
import { SpaceTabssetBarComponent } from './space-tabsset-bar/space-tabsset-bar.component';
import { SpaceToolsBarComponent } from './space-tools-bar/space-tools-bar.component';

const icons: IconDefinition[] = [
  ApiFill,
  BorderOutline,
  CloseOutline,
  CodeOutline,
  ControlOutline,
  FileOutline,
  FileTextOutline,
  FolderOpenOutline,
  FolderOutline,
  FullscreenExitOutline,
  FullscreenOutline,
  LeftOutline,
  MinusOutline,
  QuestionOutline,
  RightOutline,
  SaveOutline,
  UpOutline,
  VerticalAlignBottomOutline,
];

@NgModule({
  declarations: [
    SpaceComponent,
    SpaceHeaderComponent,
    SpaceBlockEditorComponent,
    SpaceCodeEditorComponent,
    SpaceSidebarProjectsComponent,
    SpaceSidebarManagerComponent,
    SpaceStatusBarComponent,
    SpaceToolsBarComponent,
    HorizontalSplitLineComponent,
    VerticalSplitLineComponent,
    SpaceTabssetBarComponent,
    SpaceSidebarConsoleComponent,
    SpaceSidebarLayoutComponent,
    BtnIconComponent,
    ToolbarSplitComponent,
    SpaceSidebarTerminalComponent,
  ],
  imports: [
    SharedModule,
    SpaceRoutingModule,
    BlocklierModule,
    PortalModule,
    [
      NzLayoutModule,
      NzMenuModule,
      NzLayoutModule,
      NzSelectModule,
      NzTreeModule,
      NzToolTipModule,
      NzTabsModule,
      NzIconModule.forChild(icons),
      NzRadioModule,
      NzButtonModule,
      NzDropDownModule,
      NzInputModule,
      NzCheckboxModule,
    ],
    MonacoEditorModule,
    AngularSplitModule,
  ],
  providers: [
    {
      provide: ANGULAR_SPLIT_DEFAULT_OPTIONS,
      useValue: { gutterSize: 8 } as AngularSplitOptions,
    },
    {
      provide: NzNotificationService,
      useClass: NzNotificationService,
    },
  ],
})
export class SpaceModule {}
