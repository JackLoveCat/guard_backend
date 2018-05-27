'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GLOBAL: {
    serverDomain: '"http://127.0.0.1:3017/guard/"'
  }
})
