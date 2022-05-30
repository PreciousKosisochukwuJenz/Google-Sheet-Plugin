const { google } = require('googleapis')

class Auth {
  googelSheetPlugin
  constructor(_googleSheetPlugin) {
    this.googelSheetPlugin = _googleSheetPlugin
  }

  authorize = async () => {
    const { client_email, private_key } = this.googelSheetPlugin.config
    const scopes = ['https://www.googleapis.com/auth/spreadsheets']

    const auth = new google.auth.JWT(client_email, null, private_key, scopes)
    return auth.authorize((err, tokens) => {
      if (err) {
        console.error('<::: ERR: Authorization failed')
        return
      }
    })
  }
}

module.exports = Auth
