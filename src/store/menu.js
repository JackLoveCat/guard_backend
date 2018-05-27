const state = {
  menuList: []
}

const actions = {
  async getMenuList({
    commit
  }, _user) {
    //  var res = await Vue.http.get('https://cnodejs.org/api/v1/topics', {
    //    params
    //  })
    //  if (res.data) {
    //    commit('SET_PUSH_POST', res.data)
    //  }
    // console.log(res.data)
    const menus = [{
        id: '0',
        label: 'Dashbord',
        path: '/',
        icon: 'fa fa-dashboard'
      },
      {
        id: 'setting',
        icon: 'fa fa-circle-o',
        label: '监控设置页面',
        submenu: [
          ['通知设置', [{
            id: 'f1',
            name: 'add-notifier',
            label: '添加告警通知',
            icon: 'fa fa-hand-o-up'
          }]]
        ]
      },
      {
        id: 'components',
        icon: 'fa fa-microchip',
        label: '组件',
        submenu: [
          ['Form 表单', [{
              id: 'f1',
              name: 'c-button',
              label: 'Button 按钮',
              icon: 'fa fa-hand-o-up'
            },
            {
              id: 'f2',
              name: 'c-switch',
              label: 'Switch 开关',
              icon: 'fa fa-square-o'
            },
            {
              id: 'f3',
              name: 'c-checkbox',
              label: 'Checkbox 多选框',
              icon: 'fa fa-check-square'
            },
            // {id: 'f4', label: 'Radio 单选框', icon: 'fa fa-dot-circle-o'},
            {
              id: 'f5',
              name: 'c-input',
              label: 'Input 输入框',
              icon: 'fa fa-pencil'
            },
            {
              id: 'f6',
              name: 'c-keyboard',
              label: '虚拟键盘',
              icon: 'fa fa-keyboard-o'
            }
          ]],
          ['Notice', [{
              id: 'n1',
              name: 'c-alert',
              label: 'Alert 警告',
              icon: 'fa fa-info'
            },
            {
              id: 'n2',
              name: 'c-loading',
              label: 'Loading 加载',
              icon: 'fa fa-circle-o-notch'
            }
          ]],
          ['Other', [{
              id: 'c-dropdown',
              name: 'c-dropdown',
              label: 'Dropdown'
            },
            {
              id: 'c-navbar',
              name: 'c-navbar',
              label: 'Navbar'
            },
            {
              id: 'c-container',
              name: 'c-container',
              label: '栅格布局'
            },
            {
              id: 'p-data-table',
              name: 'p-data-table',
              label: 'Table 表格数据'
            },
            {
              id: 'p1',
              name: 'login',
              label: 'Login 登录'
            },
            {
              id: 'p2',
              name: 'p-login',
              label: 'Login 登录2'
            },
            {
              id: 'p3',
              name: 'p-register',
              label: 'Register 注册'
            },
            {
              id: '400',
              path: '/404',
              label: '404'
            },
            {
              id: '500',
              path: '/500',
              label: '500'
            },
            {
              id: 'e1',
              path: '/500',
              label: 'Vuex 例子'
            }
          ]]
        ]
      }
    ]
    commit('SET_MENU_LIST', menus)
  }
}

const mutations = {
  SET_MENU_LIST(state, menuList) {
    state.menuList = menuList
  }
}

export default {
  state,
  actions,
  mutations
}
