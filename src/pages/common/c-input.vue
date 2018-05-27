<template>
  <div class="page-body">
    <m-box>
      <m-input placeholder="输入框" v-model="text" />
      <m-button>test</m-button>
      <p></p>
      <m-input placeholder="输入框" v-model="text" theme="danger" size="small" />
      <m-button size="small">测试</m-button>
      <p></p>
      <m-input placeholder="输入框" theme="success" />
      <p></p>
      <m-input block></m-input>
      <p></p>

      <m-input placeholder="输入框" type="textarea" min-width="250px" />

    </m-box>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      text: 'default'
    }
  }
}
</script>
