'use strict'
var version = require('./version')
var global = require('./global')
module.exports = {
  NODE_ENV: '"production"',
  APP_INFO: JSON.stringify(version),
  GLOBAL: JSON.stringify(global)
}
