'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  GLOBAl: {
    serverDomain: 'http://192.168.96.15:3054/guard'
  }
})
