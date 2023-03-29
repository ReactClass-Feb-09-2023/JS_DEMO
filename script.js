// DRY = Don't Repeat Yourself

// function, methods

// function declaration
function greet(prefix, name) {
  console.log('THIS', this)
}

const greet2 = function () {
  console.log('THIS', this)
}

const greet3 = (x, y) => {
  console.log('THIS', this)
}

const sum = (x, y) => {
  return x + y
}

// function invocation
// greet(true, false)
// const ret = greet3()
// console.log(ret)
// greet3()

// const result = sum(4, 5)
// console.log(result)

// Callback functions

// const arr = [10, 20, 30]

// const arrayIterationCB = (e, i, array) => {
//   console.log(e, i, array)
// }

// arr.forEach(arrayIterationCB)

// implement a function called forEach that accepts a callback function, and use it to iterate over the array elements and run the CB function.

const demo_array = ['a', 'b', 'c']

const myFunc = (e, i, a) => {
  console.log(e, i, a)
}

const forEach = (arr, cb) => {
  if (!Array.isArray(arr) || typeof cb !== 'function')
    throw new TypeError('invalid data type')
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}

forEach(demo_array, myFunc)
