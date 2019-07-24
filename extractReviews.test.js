
const {extractWordCounts} = require('./extractReviews')

const testArr = ["hello world", "flat world", "round world", "undefined world"]

it('is sane', () => {
  expect(testArr.length).toEqual(4)
})

describe('extractWordCounts', () => {
  test.todo('extracts the correct count of words')
  test.todo('ignores case of words')
  test.todo('skips the default stop words')
  test.todo('skips the provided stop words')
  test.todo('treats all items as strings')
  test.todo('handles null inputs')
})
