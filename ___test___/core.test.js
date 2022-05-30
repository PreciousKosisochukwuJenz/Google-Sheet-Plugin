const GoogleSheetPlugin = require('../src/index')
const config = {
  client_id:
    '562153214158-mmeb95269k7ulc8bdur67538u81pbgn5.apps.googleusercontent.com',
  client_secret: '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',
}

const plugin = new GoogleSheetPlugin(config)

test('init Plugin', async () => {
  expect(plugin.name).toBe('Google Sheet Plugin')
})

test('Create Spread Sheet', async () => {
  const response = await plugin.core.createSpreadSheet('New SpreadSheet')
  console.log(response)
})

test('Add Data to Spread Sheet', async () => {
  const data = {
    majorDimension: 'ROWS',
    values: [
      ['Row 1 Col 1', 'Row 1 Col 2'],
      ['Row 2 Col 1', 'Row 2 Col 2'],
    ],
  }
  const response = await plugin.core.saveResponseToSheet(
    '1vYMDhYBotmsoYlKEa0t2iwOi7f0QurPQ5ka6Of5K8vw',
    data,
  )
  console.log(response)
})
