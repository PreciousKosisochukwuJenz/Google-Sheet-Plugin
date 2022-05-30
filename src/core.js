const { google } = require('googleapis')
const sheets = google.sheets('v4')
const FileManager = require('../src/file-manager')

class Core {
  googelSheetPlugin
  constructor(_googleSheetPlugin) {
    this.googelSheetPlugin = _googleSheetPlugin
  }

  createSpreadSheet = async (title) => {
    const auth = await this.googelSheetPlugin.auth.authorize()
    const request = {
      resource: {
        properties: {
          title,
        },
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

  saveResponseToSheet = async (spreadsheetId, data) => {
    const auth = await this.googelSheetPlugin.auth.authorize()
    const range = 'Sheet1!A:A'
    const valueInputOption = 'USER_ENTERED'
    const insertDataOption = 'INSERT_ROWS'

    const resource = {
      ...data,
    }
    try {
      const response = (
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range,
          valueInputOption,
          insertDataOption,
          resource,
          auth,
        })
      ).data
      console.log('cells added.', response.updatedCells)
      return JSON.stringify(response, null, 2)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Core
