// CommonJS, every file is a module (by default)
// Modules - Excapsulated Code (only share minimum)
const { john, peter } = require('./3-names')
const sayHi = require('./4-utils')
const data = require('./5- alternative-flavor')
require('./6-mind-grenade')

console.log(data)

sayHi(john)

sayHi('susan')

