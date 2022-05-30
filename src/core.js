const { google } = require('googleapis')
const sheets = google.sheets('v4')

class Core {
  googelSheetPlugin
  constructor(_googleSheetPlugin) {
    this.googelSheetPlugin = _googleSheetPlugin
  }

  createSpreadSheet = async (title) => {
    const auth = await this.googelSheetPlugin.auth.authorize()
    const request = {
      resource: {
        title,
      },
      auth,
    }

    try {
      const response = (await sheets.spreadsheets.create(request)).data
      return JSON.stringify(response, null, 2)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Core
