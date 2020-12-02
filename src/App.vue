<template>
  <div id="app">
    <Title></Title>
    <Nav :data="titles"></Nav>
    <router-view class="component"></router-view>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Nav from '@/components/Nav'

import titles from './titles.json'

export default {
  name: 'App',
  components: {
    Title,
    Nav
  },
  data() {
    return {
      titles
    }
  }
}
</script>
<style>
html, body {
  height: 100%;
  min-width: 880px;
}
</style>
<style lang="less" scoped>
@import "styles/base/variables";
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.component {
  padding-left: @nav-width + 20px;
}
</style>
