const GoogleSheetPlugin = require('../src/index')
const config = {
  client_email: 'google-sheet@studious-spot-351801.iam.gserviceaccount.com',

  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDpEonAU2Phov9U\ntK5JRYgfvzSRmvWs4+nvn/QN4qpf/fzw9mzzOKet1Bb+xixj1C+B3UjYbC084MFH\nEpJ4Q0EHZzNMjmdez/VfxQyZj4CP701BUMrS0FPy+kY4zk4cNGurQyq7CQiADIKM\nYHz7deXRK3Zj30gB72a/g8ZHwdlDtICL/Yf5EH4/gwCBK67eGpbxlQ4hZiJKbEcq\n9E4bPav9j08DI/SipYT1/BIm2r46DCsWIforWZ0CQdQn8HjNysTKqAh3kNir47mo\nB3U51LE9t5uedX2b9J629lS+6R4PvKwHQ7yQP5LCyZWOse7+BcOpn62pQecV4mrM\nP1CGsVCZAgMBAAECggEAAhwcGZzXol8AmzJwgnLJ7umi7u99alV81GG5Cpgi7TAG\nJmNArLn2UJ1DIQbHt5af4HfRlT3zceHh9gP9xe9r6wZ84SRH3MSapsWIneo94m+q\n3hy+XUar/97SnGiHrfsuf1QiEqPcCxax5tXnw7n3PNu9HF3Uz8msPy8Q8CzZy+JV\nvBd8XnU1s8ICl6twJD+JU+J+OA5VsDWlFw3wWQhlpZ1kNqfbJ+O5TIjSJLQuIHJT\nWf/BiZ9tVf/3HYyMhto7OWLwxa0V6LmEFac4zRbc/QXqbFBiGmiB3Glu3wK1NrLU\nXzk8pq7g02nVcGkgdzI/u4XjEHuZwwxn6MpYIhSMgQKBgQD6XFe3EuOQkI6etNYb\n/ic8nUNjS/TqaKqwYEc9JYvlSy6arFWE7F/Qmdw2ql6APgjIduqNm4gkd6eCENga\nKR3HkhBhQPjo1Sln2lvCWLmBpjOSlhd5x2cgrlSYodjlgzvb1XXv3fdCDrSWL3hD\nhOUF0WOK6EqVjw5WmkilwG+O2QKBgQDuUoF6MAofNuZsE7zlieSl/Mwss1QzcI3I\n+li++6FNAK6rCoFGgOxn+h4N9q6WZD8FtGwpZ5gYqtZAm4BVaHma5CivCcbT+srM\ntsaUpXw+ouJ0KqYdYUnzcUG1BIpaP3U9WLOjhUiikQ9X8bLD0pNy91xasST0QPUb\nxRxZrlY3wQKBgFEDhqLIKvlBvdTfYZVnVZ0IqqC8GIGt4uX2EbdYqf9Fp8wHThkY\nQB0JXLgXw0KuUDtGN7ohBRn/2iV9e+BjQ66rtj8yPhlhuOdRQnYOLeElPfUGOox+\nmQF7SAaoAL6sC7ekSGiZJAStK4SZ0cnPfCi4zARMDK5+vz4I6M8yCSdpAoGBAK0t\nySaIGCLcmw44PZCy5jL0A04MNgh3JqC/wpNteKXi9AoYRR59esyHxSUyd2WTjPRR\nSjPAMpbiNXSXSudFVvCGEUY4nYHWgV3HB4BmzGUbqeDuSO2aj8lWKIAov3ybFk+w\n0EDoDoMLVBH88YE42Kq3MyY4CXlwZmx6jIJinAZBAoGBAK0//cBIL/FshwJgiEWG\nxGqLRWYMP05EVErcbbNCU3ev33xNw7d6pP16h1+zjvw73M28Csl9kvlu7zCo+zrQ\n9ds2NRCDyIXM8vX+1V5pSh9QnihhkSpKpMxqQ29Iy7GJKvCVInxSstyk5mSsp1Gg\nosms9mtSQKRAwHzgrFFRoLBo\n-----END PRIVATE KEY-----\n',
}

const plugin = new GoogleSheetPlugin(config)

test('Init Plugin', async () => {
  expect(plugin.name).toBe('Google Sheet Plugin')
})

test('Create Spread Sheet', async () => {
  const response = await plugin.core.createSpreadSheet('New SpreadSheet')
  console.log(response)
})
