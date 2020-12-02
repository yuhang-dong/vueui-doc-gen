const render = require('json-templater/string')

template = `
aha!
{{importS}}
`

console.log(render(template, {importS: 'sss'}))
