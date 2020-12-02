/*
得到所有的docs的名字,得到nav的名字
 */

const config = require('../config')
const path = require('path')
const fs = require('fs')
const { translatePath } = require('./utils')
const routerPath = path.resolve(__dirname, '../src/router/router.js')
const titlesPath = path.resolve(__dirname, '../src/titles.json')
const docs = config.docs
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
fs.writeFileSync(routerPath, outRouter)
