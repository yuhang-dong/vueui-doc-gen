#!/usr/bin/env node
/*
得到所有的docs的名字,得到nav的名字,生成入口main.js

获得输入的变量，根据变量决定开始编译/开发
 */
const argv = require('minimist')(process.argv.slice(2))
console.log(argv)
const path = require('path')
const config = require(path.resolve(process.cwd(), argv.config))
const fs = require('fs')
const render = require('json-templater/string')
const { translatePath } = require('./utils')
const webpackConfig = require('../webpack.config.js')

const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const routerPath = path.resolve(__dirname, '../src/router/router.js')
const titlesPath = path.resolve(__dirname, '../src/titles.json')
const mainJsFile = path.resolve(__dirname, '../src/main.js')

const docs = config.docs
const importStr = config.usage.importStr
let outRouter = ''
const titles = []

for(let group of docs) {
  const title = {name: group.name, items: []}
  for(let item of group.components) {
    outRouter += `{
      path: '${item.routerPath}',
      component: () => import('${translatePath(routerPath ,item.location)}')
    },`
    title.items.push({
      name: item.name,
      url: item.routerPath
    })
  }

  titles.push(title)
}

outRouter = `export default [${outRouter}]`
// 写入 Nav
fs.writeFileSync(titlesPath, JSON.stringify(titles))
console.log('title.json file has been generated')
fs.writeFileSync(routerPath, outRouter)
console.log('router.js file has been generated')

// main.js 模板
const mainJsTemplate = `import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import CodeBlock from '@/components/CodeBlock'
import 'highlight.js/styles/github-gist.css'

{{importStr}}

// 全局注册 CodeBlock
Vue.component('code-block', CodeBlock);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
`

const mainJs = render(mainJsTemplate, {
  importStr: importStr
})

fs.writeFileSync(mainJsFile, mainJs)
console.log('main.js has been generated')
if(!config.output) {
  throw new Error('output must be set.')
}
webpackConfig.output.path = config.output

if(argv.mode === 'dev') {
  webpackConfig.mode = 'development'
  const compiler = Webpack(webpackConfig);
  const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: true,
  });
  const server = new WebpackDevServer(compiler, devServerOptions);

  server.listen(webpackConfig.devServer.port, '127.0.0.1', () => {
    console.log(`Starting server successful!`);
  });
} else {
  webpackConfig.mode = 'production'
  const compiler = Webpack(webpackConfig);
  compiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      if(info.warnings instanceof Array) {
        for(let warning of info.warnings) {
          console.warn(warning.message)
        }
      } else {
        console.warn(info.warnings);
      }

    }
  });
}
