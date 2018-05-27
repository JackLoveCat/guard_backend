import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/common/app-view'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'

Vue.use(Router)

const page = name => () =>
  import ('@/pages/common/' + name)

const setting = name => () =>
  import ('@/pages/setting/' + name)

export default new Router({
  mode: 'history',
  routes: [{
      path: '',
      component: AppView,
      children: [{
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/button',
          name: 'c-button',
          component: page('c-button')

        },
        {
          path: '/switch',
          name: 'c-switch',
          component: page('c-switch')

        },
        {
          path: '/checkbox',
          name: 'c-checkbox',
          component: page('c-checkbox')

        },
        {
          path: '/alert',
          name: 'c-alert',
          component: page('c-alert')

        },
        {
          path: '/input',
          name: 'c-input',
          component: page('c-input')

        },
        {
          path: '/keyboard',
          name: 'c-keyboard',
          component: page('c-keyboard')

        },
        {
          path: '/loading',
          name: 'c-loading',
          component: page('c-loading')

        },
        {
          path: '/data-table',
          name: 'p-data-table',
          component: page('table')

        },
        {
          path: '/dropdown',
          name: 'c-dropdown',
          component: page('c-dropdown')

        },
        {
          path: '/navbar',
          name: 'c-navbar',
          component: page('c-navbar')
        },
        {
          path: '/container',
          name: 'c-container',
          component: page('c-container')
        },
        {
          path: '/keyboard',
          name: 'p-keyboard',
          component: page('c-keyboard')
        },
        {
          path: '/404',
          name: '404',
          component: page('404')
        },
        {
          path: '/500',
          name: '500',
          component: page('500')
        }
      ]
    },
    {
      path: '/setting',
      component: AppView,
      children: [{
        path: '/add-notifier',
        name: 'add-notifier',
        component: setting('add-notifier')
      }]
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Login
    },

    // pages
    {
      path: '/register',
      name: 'p-register',
      component: Register
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ]
})
