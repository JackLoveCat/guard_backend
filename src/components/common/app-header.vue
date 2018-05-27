<template>
  <m-navbar :theme="theme.theme.headerTheme">
    <m-navbar-brand>
      <i class="side-switch" :class="{
        'el-icon-more': !mini,
        'el-icon-more-outline': mini
      }" @click="handleSwitchSide"></i>
    </m-navbar-brand>
    <m-nav align="right">
      <m-nav-item padding="0">
        <m-dropdown align="right" v-if="user" padding="0 10px" @command="handleCommand">
          <a href="#" style="display: inline-block; padding: 0px; color: inherit">
            <img src="../../assets/images/user.jpg" alt="" style="border-radius: 3px;vertical-align: middle;">
            <span>{{user.username}}</span>
            <span class="caret"></span>
          </a>
          <m-dropdown-panel @command="handleCommand">
            <m-dropdown-item href="/">用户信息</m-dropdown-item>
            <m-dropdown-item hre>修改密码</m-dropdown-item>
            <m-dropdown-item cmd="logout">退出账号</m-dropdown-item>
          </m-dropdown-panel>
        </m-dropdown>
      </m-nav-item>
    </m-nav>
  </m-navbar>
</template>
<script type="text/javascript">
import { mapActions, mapState } from 'vuex'
import { requestFullScreen, exitFullscreen } from '@/utils'
import themes from './theme'
export default {
  name: 'app-header',
  data() {
    return {
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: {
        theme: {
          backgroundColor: '#333940',
          textColor: '#E0E0E0',
          activeTextColor: '#fff',
          headerTheme: 'dark'
        }
      }
    }
  },
  computed: {
    ...mapState({
      user: ({ user }) => user.user
    })
  },
  watch: {
    themeType(val) {
      this.theme = this.themes.find(e => e.name === val) || {}
      this.$emit('set-theme', this.theme)
      localStorage.setItem('theme', val)
    }
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide() {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
    handleSwitchScreen() {
      if (this.isFullScreen) {
        exitFullscreen()
        this.isFullScreen = false
      } else {
        requestFullScreen()
        this.isFullScreen = true
      }
    },
    handleSwitchHideSide() {
      console.log('change')
      this.$emit('hide-side')
    },
    handleCommand(cmd) {
      console.log({ ret: cmd })
      this.logout()
      this.$router.push({ name: 'login' })
    }
  },
  created() {
    this.getLoginUser()
    var theme = localStorage.getItem('theme') || 'dark'
    this.themeType = theme
  }
}
</script>
<style type="text/css">
.side-switch {
  display: inline-block;
  font-size: 32px;
  cursor: pointer;
  color: inherit;
  margin-top: 10px;
}
.side-switch:hover {
  color: #fff;
}
</style>
