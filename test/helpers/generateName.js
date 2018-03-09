import generateName from '../../src/helpers/generateName'

describe('function generateName', () => {
  it('should return an object with a first name and surname', () => {
    const expectedKeys = ['firstName', 'surname']
    const result = Object.keys(generateName())
    expect(result).toEqual(expectedKeys)
  })
})
