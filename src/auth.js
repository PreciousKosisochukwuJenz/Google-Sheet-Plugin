const { google } = require('googleapis')

module.exports = class Auth {
  googleSheet

  constructor(_googleSheet) {
    this.googleSheet = this.googleSheet
  }

  authorize = async () => {
    const { client_email, private_key } = this.googleSheet.configuration
    const scopes = ['https://www.googleapis.com/auth/spreadsheets']

    const auth = google.auth.JWT(client_email, null, private_key, scopes)

    return auth.authorize((err, tokens) => {
      if (err) {
        console.error('<::: Failed to connect', err)
        return
      }

      console.log(':::> connected!')
    })
  }
}
