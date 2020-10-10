// Interface segregation principle

// class Animal {

//   constructor(name) {
//     this.name = name
//   }
//   walk() {
//     console.log(`${this.name} умеет ходить`)
//   }
//   swim() {
//     console.log(`${this.name} умеет плавать`)
//   }
//   fly() {
//     console.log(`${this.name} умеет летать`)
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null
//   }
// }
// class Eagle extends Animal {
//   swim() {
//     return null
//   }
// }
// class Wale extends Animal {
//   walk() {
//     return null
//   }
//   fly() {
//     return null
//   }
// }

class Animal {
  constructor(name) {
    this.name = name
  }
}

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`)
  }
} 
const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`)
  }
}
const flier = {
  fly() {
    console.log(`${this.name} умеет летать`)
  }
}
class Dog extends Animal {

}
class Eagle extends Animal {

}
class Wale extends Animal {

}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flier)
Object.assign(Wale.prototype, swimmer)

const rex = new Dog('Rex')
const eagle = new Eagle('Eagle')
const wale = new Wale('Wale')

console.log(rex.walk());
console.log(eagle.walk());
// console.log(wale.walk());
