<template>
<div class="nav" ref="nav" >
  <div class="nav-inside">
<!--    不同的模块-->
    <NavItem v-for="(item, index) in data" :key="index" :name="item.name" :items="item.items"></NavItem>
  </div>
</div>
</template>

<script>
import NavItem from './NavItem'
export default {
  name: 'Nav',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  // data () {
  //   return {
  //     data: [
  //       {
  //         name: '基础模块',
  //         items: [
  //           {
  //             name: '介绍',
  //             url: '/intro'
  //           },
  //           {
  //             name: '快速上手',
  //             url: '/use'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // },
  methods: {
    onScroll () {
      // 视口距离
      const top = 60 - document.documentElement.scrollTop
      this.$refs.nav.style.top = `${top < 0 ? 0 : top}px`
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  components: {
    NavItem
  }
}
</script>

<style scoped lang="less">
@import '../styles/base/variables';

.nav {
  width: @nav-width;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  top: @title-height;
  overflow: hidden;
  padding: 24px 0 72px;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  // 实现不显示滚动条但是可以滚动的效果
  .nav-inside {
    height: 100%;
    width: 240px;
    overflow-y: scroll;
    ul {
      li {
        height: 40px;
        background-color: red;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
