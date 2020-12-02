import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import CodeBlock from '@/components/CodeBlock'
import 'highlight.js/styles/github-gist.css'

// 全局注册 CodeBlock
Vue.component('code-block', CodeBlock);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
