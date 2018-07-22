// @flow
const go = require('.')

const successFunc = () => Promise.resolve(1)
const errFunc = () => Promise.reject(new Error('test'))

test('return golang style error', async () => {
  const [result1, err1] = await go(successFunc)()
  expect(result1).toBe(1)
  expect(err1).toBeNull()
  const [result2, err2] = await go(errFunc)()
  expect(result2).toBeNull()
  expect(err2.message).toBe('test')
})
