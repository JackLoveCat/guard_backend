<template>
  <div class="page-body">
    <m-box>
      <m-dropdown align="right" @command="changeServiceName">
        <span theme='info'>服务名称：</span>
        <m-button>{{serverName}}
          <i class="caret"></i>
        </m-button>
        <m-dropdown-panel>
          <m-dropdown-item v-for="(item,index) in serverviceList" :key="index" :cmd="item">{{item}}</m-dropdown-item>
        </m-dropdown-panel>
      </m-dropdown>
      <p>
        <m-button @click="addUser">添加推送用户</m-button>
        <div v-for="(item,index) in userList">
          <span>邮件地址</span>
          <m-input placeholder='请输入地址' :val="item.name" />
          <m-button @click="delUser(index)">删除</m-button>
        </div>
      </p>
    </m-box>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'add-notifier',
  data() {
    return {
      serverName: '选择服务',
      serverviceList: ['manager_app', 'wechatmemberser'],
      text: '测试数据',
      userList: []
    }
  },
  components: {},
  methods: {
    addUser: function() {
      this.bus.$emit('showLoading', true, '新增用户')
      var data = {}
      data.name = 'Jack' + this.userList.length
      data.addres = ''
      this.userList.push(data)
    },

    delUser: function(index) {
      this.userList.splice(index, 1)
    },

    changeServiceName: function(cmd) {
      this.serverName = cmd
    }
  }
}
</script>
<style type="text/css">
</style>
