import generatePositions from '../../src/helpers/generatePositions'
import positions from '../../src/constants/positions'

describe('function generatePositions', () => {
  it('should return an array of objects with a name and proficiency when provided with no input', () => {
    const expectedKeys = ['name', 'proficiency']
    const expectedProficiencyRange = { min: 0, max: 99 }
    const result = generatePositions([{ position: 'LB', proficiency: 99 }])
    expect(Object.keys(result)).toEqual(expectedKeys)
    expect(positions.includes(result[0].position))
    expect(result[0].proficiency >= expectedProficiencyRange.min)
    expect(result[0].proficiency <= expectedProficiencyRange.max)
  })
  // it('should return an object with a user-provided first name and random surname when provided with an object with a firstName property', () => {
  //   const nameParameter = {firstName: 'Rafa'}
  //   const result = generatePositions(nameParameter)
  //   const expectedKeys = ['firstName', 'surname']
  //   const expectedFirstName = 'Rafa'
  //   expect(result.firstName).toEqual(expectedFirstName)
  //   expect(Object.keys(result)).toEqual(expectedKeys)
  // })
  // it('should return an object with a user-provided surname and random first name when provided with an object with a surname property', () => {
  //   const nameParameter = {surname: 'Benitez'}
  //   const result = generatePositions(nameParameter)
  //   const expectedKeys = ['firstName', 'surname']
  //   const expectedSurname = 'Benitez'
  //   expect(result.surname).toEqual(expectedSurname)
  //   expect(Object.keys(result)).toEqual(expectedKeys)
  // })
  // it('should return an object with a user-provided first name and surname when provided with both', () => {
  //   const nameParameter = {firstName: 'Rafa', surname: 'Benitez'}
  //   const result = generatePositions(nameParameter)
  //   const expectedKeys = ['firstName', 'surname']
  //   const expectedName = {firstName: 'Rafa', surname: 'Benitez'}
  //   expect(result).toEqual(expectedName)
  //   expect(Object.keys(result)).toEqual(expectedKeys)
  // })
})
