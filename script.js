// DRY = Don't Repeat Yourself

// function, methods

// function declaration
function greet(prefix, name) {
  if (typeof prefix !== 'string' || typeof name !== 'string')
    throw new TypeError(
      `calling greet function with ${typeof prefix} and ${typeof name}. greet expects all string args.`
    )
  console.log(`Hello from greeting ${prefix} ${name}`)
}

const greet2 = function () {
  console.log('greet 2 has been called')
}

const greet3 = () => {
  return 'string from greet3'
}

const sum = (x, y) => {
  return x + y
}

// function invocation
// greet(true, false)
const ret = greet3()
console.log(ret)
// greet3()

const result = sum(4, 5)
console.log(result)
