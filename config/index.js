const path = require('path')

module.exports = {
  output: path.resolve(__dirname, '../docs'),
  usage: {
    importStr: `import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)`
  },
  docs: [
    {
      name: '啊哈',
      components: [
        {
          name: 'alert 警告',
          location: path.resolve(__dirname, './docs/alert.md'),
          routerPath: '/alert'
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
