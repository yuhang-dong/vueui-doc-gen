/*
得到所有的docs的名字,得到nav的名字
 */

const config = require('../config')
const path = require('path')
const fs = require('fs')
const render = require('json-templater/string')
const { translatePath } = require('./utils')

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
