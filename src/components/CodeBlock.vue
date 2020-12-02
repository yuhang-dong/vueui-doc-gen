<template>
<div class="code-block">
  <div class="source">
    <slot name="source"></slot>
  </div>
  <div class="highlight" :class="close ? '' : 'activate'">
    <div v-if="this.$slots.default" class="description">
      <slot></slot>
    </div>
    <slot name="highlight"></slot>
  </div>
  <div class="control" @click="showCode">
    <span>{{ close ? '展开代码' : '隐藏代码'}}</span>
  </div>
</div>
</template>

<script>

export default {
  name: "CodeBlock",
  data() {
    return {
      close: true
    }
  },
  methods: {
    showCode() {
      this.close = !this.close
    }
  },
}
</script>

<style scoped lang="less">
@import '../styles/base/variables';

.code-block {
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    line-height: 1.8;
    padding: 12px 24px;
    font-size: 16px;
    background-color: #fafafa;
  }
  margin-bottom: 24px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  transition: all .2s;
  box-shadow: 0 8px 12px #ebedf0;
  &:hover {
    box-shadow: 2px 2px 4px gray;

    & > .control {
      color: @base-font-color;
    }
  }

  .source {
    padding: 24px;
  }

  .highlight {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    transition: max-height .5s;
    max-height: 1px;
    overflow: auto;
    &.activate {
      max-height: 500px;
    }

    .description {
      padding: 20px;
      box-sizing: border-box;
      border: solid 1px #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;

      p {
        margin: 0;
        line-height: 26px;
      }

      code {
        color: #4FC08D;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }
  }

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    cursor: pointer;
    transition: all .2s;
    &.hover {
      background-color: rgba(10, 10, 10, 0.3);
    }
    color: lightgray;
  }
}


</style>
