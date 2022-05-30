const Auth = require('./auth')
const Service = require('./service')

class GoogleSheetPlugin {
  static configuration = {}
  auth
  service
  _name
  constructor(config) {
    this._name = 'Google Sheet Plugin'
    this.configuration = config
    this.auth = new Auth(this)
    this.service = new Service(this)
  }
}

module.exports = GoogleSheetPlugin
