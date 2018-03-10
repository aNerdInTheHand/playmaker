import generateName from '../../src/helpers/generateName'

describe('function generateName', () => {
  it('should return an object with a first name and surname when provided with no input', () => {
    const expectedKeys = ['firstName', 'surname']
    const result = Object.keys(generateName())
    expect(result).toEqual(expectedKeys)
  })
  it('should return an object with a user-provided first name and random surname when provided with an object with a firstName property', () => {
    const nameParameter = {firstName: 'Rafa'}
    const result = generateName(nameParameter)
    const expectedKeys = ['firstName', 'surname']
    const expectedFirstName = 'Rafa'
    expect(result.firstName).toEqual(expectedFirstName)
    expect(Object.keys(result)).toEqual(expectedKeys)
  })
  it('should return an object with a user-provided surname and random first name when provided with an object with a surname property', () => {
    const nameParameter = {surname: 'Benitez'}
    const result = generateName(nameParameter)
    const expectedKeys = ['firstName', 'surname']
    const expectedSurname = 'Benitez'
    expect(result.surname).toEqual(expectedSurname)
    expect(Object.keys(result)).toEqual(expectedKeys)
  })
  it('should return an object with a user-provided first name and surname when provided with both', () => {
    const nameParameter = {firstName: 'Rafa', surname: 'Benitez'}
    const result = generateName(nameParameter)
    const expectedKeys = ['firstName', 'surname']
    const expectedName = {firstName: 'Rafa', surname: 'Benitez'}
    expect(result).toEqual(expectedName)
    expect(Object.keys(result)).toEqual(expectedKeys)
  })
})
