// Data types
// Primitive

// string, number, boolean, undefined, null, bigInt, Symbol

const name = 'John Doe' // string
const age = 15 // number - integer
const height = 180.5 // number - decimal
const isAlive = true // boolean - true/false
const fax = undefined // undefined
const bankCredit = null // null absence
const bankAccount = -9223372036854775n
const mySymbol = Symbol('key')
const z = 1
const y = 2
const x = z + y
console.log(x)

// Non Primitive

// Array (list)
const names = ['John', 'Jahn']
const ages = [10, 19]
const stuff = ['John', 16, false, 10.3]
names[0] = 'William'

// Objects
const person = {
  name: 'John',
  age: 30,
  email: 'john.doe@email.com',
  telephone: '78012345698',
  address: '123 12 ST Toronto'
}

console.log(person['name'])
console.log(person.name)
console.log(person)

// Map
const personMap = new Map()
personMap.set('name', 'Max')
personMap.set('tel', '7801234669')
personMap.set('age', 25)

console.log(personMap.get('name'))

console.log(personMap)

// Set
const setOfNumbers = new Set()
setOfNumbers.add(1)
setOfNumbers.add(2)
setOfNumbers.add(2)
setOfNumbers.add(1)

const emptyObj1 = {}
const emptyObj2 = {}

setOfNumbers.add(emptyObj1)
setOfNumbers.add(emptyObj2)

console.log(setOfNumbers.has())
console.log(setOfNumbers)
