const Foswig = require('foswig')
const playerSeed = require('../../data/player_seed.json')

module.exports = function (name = {}) {
  const firstNames = playerSeed.players.map(player => player.name.first)
  const surnames = playerSeed.players.map(player => player.name.last)

  var firstNameChain = new Foswig(3)
  firstNameChain.addWordsToChain(firstNames)

  var surnameChain = new Foswig(3)
  surnameChain.addWordsToChain(surnames)

  const firstName = name.firstName
    ? name.firstName
    : firstNameChain.generateWord(4, 20, true)
  const surname = name.surname
  ? name.surname
  : surnameChain.generateWord(4, 20, true)

  console.log(`firstName: ${firstName}`)
  console.log(`surname: ${surname}`)

  return {firstName, surname}
}
