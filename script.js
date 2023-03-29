// function foo() {
//   let y = 0
//   return () => {
//     const x = ++y
//     console.log(x)
//   }
// }

// foo()()

function counter() {
  let count = 0

  return () => {
    count++
    console.log(count)
  }
}

const myCounter = counter()

myCounter()
myCounter()
myCounter()
myCounter()

const myCounter2 = counter()

myCounter2()
myCounter2()
myCounter2()

counter()()
counter()()
counter()()
