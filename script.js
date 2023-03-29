// const car = {
//   color: 'red',
//   seat: 4,
//   speed: 0,
//   accelerate: function () {
//     this.speed++
//   }
// }

// console.log(car.speed)
// car.accelerate()
// car.accelerate()
// car.accelerate()
// console.log(car.speed)

// class => blueprint to create objects

class Car {
  constructor(color, seats) {
    this.color = color
    this.seats = seats
  }
  speed = 0

  accelerate() {
    this.speed++
  }

  brake() {
    this.speed = 0
  }
}

const car = new Car('red', 4)

console.log(car.speed)
car.accelerate()
car.accelerate()
car.accelerate()
console.log(car.speed)

const civic = new Car('blue', 2)

console.log(civic.speed)
civic.accelerate()
civic.accelerate()
civic.brake()
console.log(civic.speed)

class Array {
  constructor(arr) {
    this.arr = arr
  }

  forEach() {}
  map() {}
  filter() {}
}
