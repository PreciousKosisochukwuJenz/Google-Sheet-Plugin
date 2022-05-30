const Auth = require('./auth')
const Core = require('./core')

class GoogleSheetPlugin {
  auth
  config
  core
  name

  constructor(_config) {
    this.name = 'Google Sheet Plugin'
    this.config = _config
    this.auth = new Auth(this)
    this.core = new Core(this)
  }
}

module.exports = GoogleSheetPlugin
