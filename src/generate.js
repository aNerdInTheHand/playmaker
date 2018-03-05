const Foswig = require('foswig')
const playerSeed = require('../data/player_seed.json')

module.exports = (function () {
  const firstNames = playerSeed.players.map(player => player.name.first)
  const surnames = playerSeed.players.map(player => player.name.last)

  var firstNameChain = new Foswig(2)
  firstNameChain.addWordsToChain(firstNames)

  var surnameChain = new Foswig(2)
  surnameChain.addWordsToChain(surnames)

  const firstName = firstNameChain.generateWord(4, 20, false)
  const surname = surnameChain.generateWord(4, 20, false)

  console.log(`firstName: ${firstName}`)
  console.log(`surname: ${surname}`)

  return `${firstName} ${surname}`
})()
