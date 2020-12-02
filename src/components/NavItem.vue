<template>
<ul>
  <li>{{name}}</li>
  <li v-for="(item, index) in items" :key="index" :class="$route.path === item.url ? 'activate' : ''">
    <router-link :to="item.url" >
      {{item.name}}
    </router-link>
  </li>
</ul>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    name: {
      type: String
    },
    items: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
    $route (to, from) {
      console.log(this.$route)
    }
  }
}
</script>

<style scoped lang="less">
@import '../styles/base/variables';
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    line-height: 44px;
    height: 44px;
    font-size: 13px;
    border-radius: 25%;
    padding: 8px 0px 8px 30px;
    box-sizing: border-box;
    &.activate {
      a {
        color: @base-font-color;
      }
    }
  }
  li:first-of-type {
    font-size: 15px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: @base-font-color;
    }
  }
}
</style>
