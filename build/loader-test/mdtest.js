const fs = require('fs')
const path = require('path')


const mdPath = __dirname
const routerPath = path.resolve(__dirname, '../../src/router/index.js')

console.log(mdPath)
console.log(routerPath)
console.log(translatePath(routerPath, mdPath))
