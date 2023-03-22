// to boolean
console.log(Boolean())

// truthy vs. falsy

// numbers
// 0, NaN => false
// any other number => true
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(3))

// strings
// '' empty string => false
// any other char => true
console.log(Boolean(''))
console.log(Boolean('aa'))

// undefined, null => false
console.log(Boolean(undefined))
console.log(Boolean(null))

// arrays, objects => true
console.log(Boolean([]))
console.log(Boolean({}))

// check empty array
const arr = ['a', 'b']
console.log(Boolean(arr.length))

// check empty objects
const obj = {
  key1: 'val1'
}
console.log(Boolean(Object.keys(obj).length))

// booleans true, false

// !! double bang

console.log(Boolean(0))
console.log(!!3)
