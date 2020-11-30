<template>
  <div id="app">
    <Title></Title>
    <Nav></Nav>
    <Components class="component"></Components>
  </div>
</template>

<script>
import Title from './components/Title'
import Nav from './components/Nav'
import Components from './components/Components'

export default {
  name: 'App',
  components: {
    Title,
    Nav,
    Components
  }
}
</script>
<style>
html, body {
  height: 100%;
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
  padding-left: @nav-width + 10px;
}
</style>
