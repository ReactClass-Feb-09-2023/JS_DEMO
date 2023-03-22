// loops and iterations

const persons = [
  {
    name: 'john',
    email: ''
  },
  {
    name: 'joe',
    email: ''
  },
  {
    name: 'jahn',
    email: ''
  },
  {
    name: 'Kal',
    email: ''
  }
]

// for loop
const len = persons.length //4

for (let i = 0; i < len; i++) {
  // console.log(`Hello ${persons[i].name}`)
}

// while

let i = 0
while (i < len) {
  // console.log(`Hello from while loop, ${persons[i].name}`)
  i++
  // console.log('i: ', i)
}

// do-while

let j = 3
do {
  // console.log(`Hello from do-while loop, ${persons[j].name}`)
  j++
  // console.log('i: ', j)
} while (j < len)

// for of (array)

const nums = [10, 13, 16, 30]

for (let num of nums) {
  // console.log(num)
}

// for in (object)

const obj = {
  name: 'joe',
  age: 15,
  email: 'joe@email',
  address: '123 st'
}

for (let key in obj) {
  // console.log(key, obj[key])
}

// array methods

const alphabets = ['a', 'b', 'c', 'd']

alphabets.forEach((char, i, arr) => {
  // console.log(char)
  // console.log(i)
  // console.log(arr)
})

// Practice
// having array of numbers, print to the console only the even numbers

const numbers = [
  9, 8, 3, 7, 12, 6, 20, 5, 2, 1, 17, 4, 10, 11, 15, 14, 16, 13, 19, 18
]

for (let number of numbers) {
  if (number % 2 !== 0) {
    // console.log(number)
  }
}

// having array of names, or people objects, print to the console a greeting message, with the person name
const people = [
  { name: 'Emily' },
  { name: 'Jacob' },
  { name: 'Sophia' },
  { name: 'Ethan' },
  { name: 'Olivia' },
  { name: 'William' },
  { name: 'Ava' },
  { name: 'Michael' },
  { name: 'Mia' },
  { name: 'Benjamin' }
]

people.forEach(person => {
  // console.log(`Hello, ${person.name}!`)
})

// having array of 5 strings, concatenate all the strings into one string and print to the console.

const strs = ['H', 'e', 'l', 'l', 'o']

let outputStr = ''

for (let i = 0; i < strs.length; i++) {
  outputStr += strs[i]
}

console.log(outputStr)
