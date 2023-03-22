// // flow control
// // conditional statements
// // if statement

// const person = {
//   name: 'john',
//   age: 24,
//   accountType: 'regular'
// }

// if (person.age < 18) {
//   console.log('Access Denied')
//   //... more lines of code
// }

// if (person.age > 18) {
//   console.log('Access Granted')
// 	// ...
// }

// // if -else

// if (person.age < 18) {
//   console.log('Access Denied')
// } else {
//   console.log('Access Granted')
// }

// if (person.age < 10){

// }else if (person.age < 18){

// }

// // switch-case

// if (person.accountType === 'premium'){
// 	console.log('Special message 1')
// }else if (person.accountType === 'golden') {
// 	console.log('Special message 2')
// } else {
// 	console.log('Regular message')
// }

// switch (person.accountType) {
// 	case 'premium':
// 		console.log('special msg 1');
// 		break;
// 	case 'golden':
// 		console.log('special msg 2')
// 		break;
// 	default:
// 		console.log('regular msg')
// }
// console.log('next line')

// // ternary operator

// if (person.age < 18) {
//   console.log('Access Denied')
// } else {
//   console.log('Access Granted')
// }

// person.age < 18 ? console.log('denied') : console.log('granted')

// --- fizz buzz
// given a number, log to the console fizz if it is divisible by 3, buzz if divisible by 5 and fizzBuzz if divisible by 5 and 3

// if else, logical operators && || ! , % arithmetic operator

const num = 3
let output

if (num % 5 === 0 && num % 3 === 0) {
  output = 'FizzBuzz'
} else if (num % 3 === 0) {
  output = 'Fizz'
} else if (num % 5 === 0) {
  output = 'Buzz'
}

console.log(output)
