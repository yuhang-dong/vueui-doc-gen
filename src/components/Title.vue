<template>
  <div class="title">
    <div class="container">
      <div class="logo">
        <a :href=imgHref>
          <img :src="logo" alt="#" class="budget">
          <span class="name">{{ name }}</span>
        </a>
      </div>
      <div class="budgets">
        <a :href=gitUrl target="_blank">
          <img :src="github" alt="#" class="budget">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import githubSvg from '../assets/github.svg'
import logo from '../assets/logo.png'
export default {
  name: 'Title',
  props: {
    imgHref: {
      type: String,
      default: '#'
    },
    imgSrc: {
      type: String,
      default: githubSvg.toString()
    },
    name: {
      type: String,
      default: 'Doc'
    },
    gitUrl: {
      type: String,
      default: 'https://github.com/yuhang-dong/doc-generator'
    }
  },
  data () {
    return {
      github: githubSvg,
      logo
    }
  }
}
</script>

<style scoped lang="less">
@import '../styles/base/layout';
@import '../styles/base/variables';

.title {
  height: @title-height;
  background-color: @title-bg-color;

  .container {
    display: flex;
    width: 96%;
    margin: 0 auto;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .budget {
      width: 26px;
      height: 26px;
      margin-right: 10px;
    }
    .name {
      color: white;
      font-size: 22px;
    }
    .logo {
      a {
        line-height: @title-height;
        display: flex;
        align-items: center;
        text-decoration: none;
      }
    }
  }
}

</style>
