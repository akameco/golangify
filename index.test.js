// @flow
const go = require('.')

test('return golang style error', async () => {
  const successFunc = () => Promise.resolve(1)
  const errFunc = () => Promise.reject(new Error('test'))

  const [result1, err1] = await go(successFunc)()
  expect(result1).toBe(1)
  expect(err1).toBeNull()
  const [result2, err2] = await go(errFunc)()
  expect(result2).toBeNull()
  expect(err2.message).toBe('test')
})

test('return sync golang style error', () => {
  const successFunc = () => 1
  const errFunc = () => new Error('test')
  const [result1, err1] = go(successFunc)()
  expect(result1).toBe(1)
  expect(err1).toBeNull()
  const [result2, err2] = go(errFunc)()
  expect(result2).toBeNull()
  expect(err2.message).toBe('test')
})

test('return sync golang style with custom error', () => {
  class CustomError extends Error {
    // eslint-disable-next-line no-useless-constructor
    constructor(...params) {
      super(...params)
    }
  }
  const errFunc = () => new CustomError('test')
  const [result2, err2] = go(errFunc)()
  expect(result2).toBeNull()
  expect(err2.message).toBe('test')
})
