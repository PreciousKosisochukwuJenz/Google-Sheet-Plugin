const { testing } = require('googleapis/build/src/apis/testing')
const GoogleSheetPlugin = require('../src/index')
const config = {
  client_email:
    'google-sheet-test@studious-spot-351801.iam.gserviceaccount.com',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCney91aJdhwaWv\n6aH0t6hWDFtSvq7/siE52RLIzJk1wcY0MDUN5MOTqgTMa59EhlTJ1qd2dKS28/9U\nParxVLxvhLJA3my+tCVrZnLN4Sb6NJ3b4juDdlsS6SKfJJLFn8tCA0K/j8F6YSqP\nO7H+51HC15NRuzBrgBVo8b9MiCuxeOJIU8gFKK9uep6ElzukTQPsx8E2JIvE5NZm\nhgXOed91+VqcBEFmjundFbImGc/5W476qtyS89LycbafeJG1EX2g9uEORn47fsJM\nEzk6K08i9Og3A4Kz7Dmq+T55hy+kV770a6uedp+/CDiP4d9kHwZtbTIo1/6fcI67\n/z3XhEUtAgMBAAECggEAPEFfDTwwfpy3eicxvAQZfb/bWVU+S8MwHgphrjmiA4uw\nPhV7+QAtdyJrsIol1ncH6UgfnsgPfL0jRxEav9GvK+YPZbRAZooUjmPg+P5A0jL8\n+l+V7tG1qYOUD7KOVaiMbbcTnCzhvKBZugeNnfpmWZXKrFSO8pY13bhgDW5OXf5c\nnMeWew5JcfVQJbvCYr5WUs8JzjNwZKZNNkCc1jAZmchIvoxIbFPmqU4fxeYjNCGo\nxsjaCjfALp0yOhL7KaWUpXpLviut1rKp0ye40wTMBI5Mk1Jir0pCUEyzYIXdSuSE\nSKS5dxqYaNJMSd93MzFCC5L2XoX5ibtD8HpyMqxbJwKBgQDkp2F4XYG1/E2gwK3K\nRPLJyLQH4+VKLd4l92+/+A2q6aqPoT9Ljaov4SBvAaL1nhDPYkrpWKTob4D7jVRj\nqTvslehn7ZINdrJ9jPj8FVdOXK2ALInB++My5j/sU4DmPl3ccZLRbJvug0LY4VF8\nSTf0Tc5nEONYGzvc0uOcRRZ7bwKBgQC7gubuCO/F3ZGDTJ+KgHQ++1HvboRYjsW9\n9iutVmH1Tif43ra0d/BydvELGLez6cpujRe2b8yc2Ev2GtHMEtREFIqCsuknH+sP\nStSkuczt10XNs9AKoN3FBs00RwzMNdeVo6yXVkkSywgNj3tqVZkQR5NDcSfpqrlz\nixcH+MZrIwKBgCJ4eWFD94IP/0P0yD5uFowFDd8CpFaCg7MFkntGUgkqIOR2Uqx5\nNubw8YrKnF6a7b3V+6UiD/palP9XVxmPMdGA6ACC+Dm/Yzk6P28BaKAPqLhh/oKY\nDrBltc1S6WPMkynglVmtHfTfJPy9OyOZhi32bN9s1Fk8AdJQmK++Wp1RAoGBAJQ6\nS5E50UlJ+MChbrEPEFXFWCT86XQUEO80zZwt4CwJh4GtlSKeeZ4StkN+W6HGm7a+\npFMcl9QZDBtVYil/bPsQfdoJ0lOSYL/q+KPrGLufZFfS4A+20Pjygn7j95LqsSxi\ngYn0tLk9dHU7ymTpm6EJ47j5l4KY6hcTibZMi5WfAoGAA7ZUaa0sRrQW/oTEB7EN\nOmXOJQSkwCFn2smPKHqfi3vmlqivk4oYAN6BTpbejHbjIqG+3DCxmTmso7CYW8Ao\nJqukCTgP84/IEYljN3xiE52KsezB2VN5tOZHrxdOflMBF9NKRDO9K3Y3KCnGbezW\nnaZPMRaMZDghKgCUhPG3jEM=\n-----END PRIVATE KEY-----\n',
}

const plugin = new GoogleSheetPlugin(config)

test('Init Plugin', async () => {
  expect(plugin.name).toBe('Google Sheet Plugin')
})

test('Create Spread Sheet', async () => {
  const response = await plugin.core.createSpreadSheet('New SpreadSheet')
  console.log(response)
})
