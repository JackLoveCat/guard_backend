<template>
  <div class="error-panel animated fadeInUp">
    <h1 class="error-code">500</h1>
    <p class="error-description">Internal Server Error</p>
    <div class="error-ctrl">
      <m-button type="info" @click="$router.push({name: 'home'})" round>
        <i class="fa fa-home"></i>&nbsp;主页</m-button>
      <m-button @click="$router.back()" round plain>
        <i class="fa fa-arrow-left"></i>&nbsp;返回</m-button>
    </div>
    <p class="copyright">{{appName}} ©2018 K米 by {{author}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      author: window.APP_INFO.author,
      appName: window.APP_INFO.appName
    }
  }
}
</script>
<style type="text/css" scoped>
.error-panel {
  position: relative;
  width: 250px;
  background: #fff;
  margin: 0 auto;
  margin-top: 150px;
  padding: 15px;
  border-radius: 4px;
  font-family: Roboto, Segoe UI, 'Microsoft YaHei';
}
.error-panel:after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 20px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.error-panel .error-code {
  font-size: 4rem;
  font-weight: 100;
  text-align: center;
  margin: 0;
  color: #f77373;
}
.error-panel .error-description {
  text-align: center;
  margin-bottom: 30px;
}
.error-panel .error-ctrl {
  text-align: center;
  margin-bottom: 30px;
}
.error-panel .copyright {
  text-align: center;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
</style>