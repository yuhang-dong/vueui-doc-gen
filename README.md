# vueui-doc-gen

[English ReadMe](./README_en.md)
## 这个项目是你需要的吗？

1. 你已经使用Vue2打造了自己的一个组件库？
2. 你想给自己的组件库生成一个在线文档？
3. 你觉得 ElementUI 的文档示例展示很漂亮？
4. 你想快速生成，只需要自己写**Markdown 文档**？

OK. 本项目就是你所需要的。

## 那么你该如何使用呢？

首先明确：本工具内部也是实现了一个**基于Vue**的网站模板,根据用户的配置进行编译。

一个假设的文件目录如下:
```
my-ui-project
+--package               // 你自己的UI包
|  +--carousel           // 各种各样的UI组件
|  |  \---src
|  \---utils
+---config
|   |   index.js        // 配置文件
|   |
|   \---docs            // 需要生成的文档
|           alert.md
|           avatar.md
|           backtop.md
|           badge.md

```

### 安装本工具

注意： 一定要加 **-D**

```
npm install -D vueui-doc-gen
```

### 创建配置项
一个简单的示例配置[config/index.js](./config/index.js)
```js
// my-ui-project/config/index.js

// 为了保证本工具正确处理各种路径，
// 请尽量在配置文件中涉及路径的地方使用path.resolve()的方式
const path = require('path') 

module.exports = {
  output: path.resolve(__dirname, '../docs'), // 指定最后生成的文档网站的位置
  usage: { // usage.importStr 指定了如何在工具内部的main.js中使用的语句, 以下以ElementUI为例
    importStr: `import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)`
  },
  docs: [ // 指定各种文档所在的位置，
    {
      name: '啊哈', // 指定一级标题， 文档共有两档标题
      components: [
        {// 指定二级标题以及其md文档所在位置
          name: 'alert 警告', 
          location: path.resolve(__dirname, './docs/alert.md'),
          routerPath: '/alert' // 路径自定一个唯一路径
        },
        {
          name: 'backtop 回顶',
          location: path.resolve(__dirname, './docs/backtop.md'),
          routerPath: '/backtop'
        }
      ]
    },
    {
      name: '嘿哟',
      components: [
        {
          name: 'card 卡片',
          location: path.resolve(__dirname, './docs/card.md'),
          routerPath: '/card'
        },
        {
          name: 'checkbox 选择',
          location: path.resolve(__dirname, './docs/checkbox.md'),
          routerPath: '/checkbox'
        }
      ]
    }
  ]
}

```

### 开始使用

1. 开启开发服务器查看最终效果(**不会**在输出文件夹中生成文件)
```shell script
cd my-ui-project
npx vueui-doc-gen --config ./config/index.js --mode dev
```

2. 生成
```shell script
cd my-ui-project
npx vueui-doc-gen --config ./config/index.js

```

## 一个简单的例子
[https://yuhang-dong.github.io/vueui-doc-gen/#/](https://yuhang-dong.github.io/vueui-doc-gen/#/)

![效果图](./pics/result.jpg)
