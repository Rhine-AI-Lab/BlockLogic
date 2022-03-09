import * as Blockly from 'blockly';

import { BlocklierArgumentReader } from '../models/blocklier-argument-reader.class';
import {
  BlocklierCustomBlock,
  BlocklierCustomBlockCode,
  BlocklierCustomBlockDefinition,
  BlocklierCustomBlockWithJavaScript,
} from '../models/blocklier-custom-block.class';
import { helpUrlBuilder } from './common';

const colour = '#c6a000';
const helpUrl = helpUrlBuilder('app');

@BlocklierCustomBlock.register('app_version_code')
export class AppVersionCodeBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [{ message: '获取当前软件版本号' }],
    output: 'Number',
    colour,
    tooltip:
      '当前软件版本号，整数值。例如160, 256等。\n如果在Auto.js中运行则为Auto.js的版本号；在打包的软件中则为打包软件的版本号。',
    helpUrl: helpUrl('appversionCode'),
  };

  toJavaScript(): BlocklierCustomBlockCode {
    return ['app.versionCode', 0];
  }
}

@BlocklierCustomBlock.register('app_version_name')
export class AppVersionNameBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [{ message: '获取当前软件的版本名称' }],
    output: 'String',
    colour: colour,
    tooltip:
      "当前软件的版本名称，例如'3.0.0 Beta'\n如果在Auto.js中运行则为Auto.js的版本名称；在打包的软件中则为打包软件的版本名称。",
    helpUrl: helpUrl('appversionName'),
  };

  toJavaScript(): BlocklierCustomBlockCode {
    return ['app.versionName', 0];
  }
}

@BlocklierCustomBlock.register('app_autojs')
export class AppAutojsBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '获取当前autojs的 %1 ',
        args: [
          {
            type: 'field_dropdown',
            name: 'KEY',
            options: [
              ['版本号', 'versionCode'],
              ['版本名', 'versionName'],
            ],
          },
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip: '',
    helpUrl: helpUrl('appautojsversioncode'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const value = args.code('KEY');
    return `app.autojs.${value};\n`;
  }
}

@BlocklierCustomBlock.register('app_launch')
export class AppLaunchBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '通过应用包名启动应用 %1 ',
        args: [{ type: 'input_value', name: 'PACKAGE_NAME', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '如果该名称对应的应用不存在，则返回false; 否则返回true。如果该名称对应多个应用，则只启动其中某一个。',
    helpUrl: helpUrl('applaunchpackagename'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const packageName = args.code('PACKAGE_NAME');
    return `app.launch(${packageName});\n`;
  }
}

@BlocklierCustomBlock.register('app_launch_app')
export class AppLaunchAppBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '通过应用名称启动应用 %1 ',
        args: [{ type: 'input_value', name: 'APP_NAME', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '如果该名称对应的应用不存在，则返回false; 否则返回true。如果该名称对应多个应用，则只启动其中某一个。',
    helpUrl: helpUrl('applaunchappappname'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const appName = args.code('APP_NAME');
    return `app.launchApp(${appName});\n`;
  }
}

@BlocklierCustomBlock.register('app_get_package_name')
export class AppGetPackageNameBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '获取应用名对应的包名 %1 ',
        args: [{ type: 'input_value', name: 'APP_NAME', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '如果该找不到该应用，返回null；如果该名称对应多个应用，则只返回其中某一个的包名。。',
    helpUrl: helpUrl('appgetpackagenameappname'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const appName = args.code('APP_NAME');
    return [`app.getPackageName(${appName})`, 0];
  }
}

@BlocklierCustomBlock.register('app_get_app_name')
export class AppGetAppNameBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '获取包名对应的应用名 %1',
        args: [{ type: 'input_value', name: 'PACKAGE_NAME', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip: '如果该找不到该应用，返回null。',
    helpUrl: helpUrl('appgetappnamepackagename'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const packageName = args.code('PACKAGE_NAME');
    return `app.getAppName(${packageName})`;
  }
}

@BlocklierCustomBlock.register('app_open_app_setting')
export class AppOpenAppSettingBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '打开应用的详情页',
      },
    ],
    output: 'String',
    colour: colour,
    tooltip: '如果找不到该应用，返回false; 否则返回true。',
    helpUrl: helpUrl('appopenappsettingpackagename'),
  };

  toJavaScript(): BlocklierCustomBlockCode {
    const code = 'app.openAppSetting';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  }
}

@BlocklierCustomBlock.register('app_view_file')
export class AppViewFileBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '用其他应用查看文件 %1 ',
        args: [{ type: 'input_value', name: 'PATH', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '文件不存在的情况由查看文件的应用处理。如果找不出可以查看该文件的应用，则抛出ActivityNotException。',
    helpUrl: helpUrl('appviewfilepath'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const path = args.code('PATH');
    return `app.viewFile(${path});\n`;
  }
}

@BlocklierCustomBlock.register('app_edit_file')
export class AppEditFileBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '用其他应用编辑文件 %1 ',
        args: [{ type: 'input_value', name: 'PATH', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '文件不存在的情况由编辑文件的应用处理。如果找不出可以编辑该文件的应用，则抛出ActivityNotException。',
    helpUrl: helpUrl('appeditfilepath'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const path = args.code('PATH');
    return `app.editFile(${path});\n`;
  }
}

@BlocklierCustomBlock.register('app_uninstall')
export class AppUninstallBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '卸载应用 %1 ',
        args: [{ type: 'input_value', name: 'PACKAGE_NAME', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '执行后会会弹出卸载应用的提示框。如果该包名的应用未安装，由应用卸载程序处理，可能弹出未找到应用的提示。',
    helpUrl: helpUrl('appuninstallpackagename'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const packageName = args.code('PACKAGE_NAME');
    return `app.uninstall(${packageName});\n`;
  }
}

@BlocklierCustomBlock.register('app_open_url')
export class AppOpenUrlBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '用浏览器打开网站url %1 ',
        args: [{ type: 'input_value', name: 'URL', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip: '如果没有安装浏览器应用，则抛出ActivityNotException。',
    helpUrl: helpUrl('appopenurlurl'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const url = args.code('URL');
    return `app.openUrl(${url});\n`;
  }
}

@BlocklierCustomBlock.register('app_send_email')
export class AppSendEmailBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '根据选项options调用邮箱应用发送邮件 %1 ',
        args: [{ type: 'input_value', name: 'OPTIONS', check: 'String' }], // TODO: arg type?
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '如果该名称对应的应用不存在，则返回false; 否则返回true。如果该名称对应多个应用，则只启动其中某一个。',
    helpUrl: helpUrl('appsendemailoptions'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const options = args.code('OPTIONS');
    return `app.sendEmail(${options});\n`;
  }
}

@BlocklierCustomBlock.register('app_start_activity')
export class AppStartActivityBlock
  extends BlocklierCustomBlock
  implements BlocklierCustomBlockWithJavaScript
{
  definition: BlocklierCustomBlockDefinition = {
    lines: [
      {
        message: '启动Auto.js界面 %1 ',
        args: [{ type: 'input_value', name: 'NAME', check: 'String' }],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour,
    tooltip:
      '该函数在Auto.js内运行则会打开Auto.js内的界面，在打包应用中运行则会打开打包应用的相应界面。',
    helpUrl: helpUrl('appstartactivityname'),
  };

  toJavaScript(args: BlocklierArgumentReader): BlocklierCustomBlockCode {
    const name = args.code('NAME');
    return `app.startActivity(${name});\n`;
  }
}
