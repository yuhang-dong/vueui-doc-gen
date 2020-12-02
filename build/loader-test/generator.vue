
<template>
  <section class="content element-doc">
    <h2 id="backtop-hui-dao-ding-bu"><a class="header-anchor" href="#backtop-hui-dao-ding-bu">¶</a> Backtop 回到顶部</h2>
    <p>返回页面顶部的操作按钮</p>
    <h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
    <p>滑动页面即可看到右下方的按钮。</p>
    <demo-block>

      <template slot="source"><element-demo0 /></template>
      <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scroll down to see the bottom-right button.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot;&gt;&lt;/el-backtop&gt;
&lt;/template&gt;
</code></pre></template></demo-block>
    <h3 id="zi-ding-yi-xian-shi-nei-rong"><a class="header-anchor" href="#zi-ding-yi-xian-shi-nei-rong">¶</a> 自定义显示内容</h3>
    <p>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。</p>
    <demo-block>

      <template slot="source"><element-demo1 /></template>
      <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scroll down to see the bottom-right button.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot; :bottom=&quot;100&quot;&gt;
    &lt;div
      style=&quot;{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }&quot;
    &gt;
      UP
    &lt;/div&gt;
  &lt;/el-backtop&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
    <table>
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>target</td>
        <td>触发滚动的对象</td>
        <td>string</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>visibility-height</td>
        <td>滚动高度达到此参数值才出现</td>
        <td>number</td>
        <td></td>
        <td>200</td>
      </tr>
      <tr>
        <td>right</td>
        <td>控制其显示位置, 距离页面右边距</td>
        <td>number</td>
        <td></td>
        <td>40</td>
      </tr>
      <tr>
        <td>bottom</td>
        <td>控制其显示位置, 距离页面底部距离</td>
        <td>number</td>
        <td></td>
        <td>40</td>
      </tr>
      </tbody>
    </table>
    <h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
    <table>
      <thead>
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>click</td>
        <td>点击按钮触发的事件</td>
        <td>点击事件</td>
      </tr>
      </tbody>
    </table>

  </section>
</template>
<script>
export default {
  name: 'component-doc',
  components: {
    "element-demo0": (function() {

      var render = function() {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c(
            "div",
            [
              [
                _vm._v("\n  Scroll down to see the bottom-right button.\n  "),
                _c("el-backtop", {
                  attrs: { target: ".page-component__scroll .el-scrollbar__wrap" }
                })
              ]
            ],
            2
        )
      }
      var staticRenderFns = []
      render._withStripped = true


      const democomponentExport = {}
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      }
    })(),
    "element-demo1": (function() {

      var render = function() {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c(
            "div",
            [
              [
                _vm._v("\n  Scroll down to see the bottom-right button.\n  "),
                _c(
                    "el-backtop",
                    {
                      attrs: {
                        target: ".page-component__scroll .el-scrollbar__wrap",
                        bottom: 100
                      }
                    },
                    [
                      _c(
                          "div",
                          {
                            staticStyle: {
                              "{\n        height": "100%",
                              width: "100%",
                              "background-color": "#f2f5f6",
                              "box-shadow": "0 0 6px rgba(0,0,0, .12)",
                              "text-align": "center",
                              "line-height": "40px",
                              color: "#1989fa"
                            }
                          },
                          [_vm._v("\n      UP\n    ")]
                      )
                    ]
                )
              ]
            ],
            2
        )
      }
      var staticRenderFns = []
      render._withStripped = true


      const democomponentExport = {}
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      }
    })(),
  }
}
</script>

