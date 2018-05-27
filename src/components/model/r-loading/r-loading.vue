<template>
  <div class="r-loading" v-show="isShow">
    <div class="loading-box">
      <img :src="svg" :style="loadingStyle" class="left_item" />
      </img>
      <span class="right_item">{{loadingText}}</span>
    </div>
  </div>
</template>

<script>
import * as svgLoading from './svg'
export default {
  name: 'r-loading',
  props: {
    type: {
      type: String,
      default: 'beat'
    },
    color: {
      type: String,
      default: '#5ac1dd'
    },
    size: { default: () => ({ width: '30px', height: '30px' }) }
  },
  data() {
    return {
      isShow: false,
      loadingText: '数据加载中...'
    }
  },
  mounted() {
    var self = this
    this.bus.$on('showLoading', function(
      showLoading,
      loadingText = '数据加载中...',
      isAutoClose = true
    ) {
      self.isShow = showLoading
      self.loadingText = loadingText
      if (showLoading && isAutoClose) {
        setTimeout(function() {
          self.isShow = false
        }, 1000)
      }
    })
  },
  computed: {
    svg() {
      return svgLoading[this.type]
    },
    loadingStyle() {
      return {
        fill: this.color,
        width: this.size.width,
        height: this.size.height
      }
    }
  }
}
</script>

<style scoped>
.r-loading {
  width: 100%;
  height: 100%;
  position: fixed;
  _position: absolute;
  top: 0;
  z-index: 1000;
  opacity: 0.3;
  filter: alpha(opacity=100);
  background-color: #000;
}
.r-loading .loading-box {
  width: 160px;
  height: 30px;
  background-color: #ffffff;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  padding: 1px 1px;
  display: block;
  box-sizing: border-box;
}

.left_item {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
}

.right_item {
  width: 100px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  margin-left: 10px;
}
</style>