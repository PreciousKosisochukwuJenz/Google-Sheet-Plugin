const { google } = require('googleapis')
const sheets = google.sheets('v4')

module.exports = class Service {
  googleSheet
  constructor(_googleSheet) {
    this.googleSheet = _googleSheet
  }

  createSpreadSheet = async (title) => {
    const auth = await this.googleSheet.auth.authorize()
    const request = {
      resource: {
        title,
      },
      auth,
    }

    try {
      const response = (await sheets.spreadsheets.create(request)).data
      console.log(JSON.stringify(response, null, 2))
    } catch (err) {
      console.error(err)
    }
  }
}
