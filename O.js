// Open Close principle

class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.size = size
  }

  area() {
    return this.size**2
  }
  
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }
  
  area() {
    return (this.radius**2) * Math.PI
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

class Triangle extends Shape {
  constructor(a, b) {
    super()
    this.a = a
    this.b = b
  }
  area() {
    return (this.a + this.b) / 2
  }
}

class AreaCalculate {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      
      // if (shape.type === 'Square') {
      //   acc += ((shape.size) ** 2) * Math.PI
      // }
      // if (shape.type === 'Circle') {
      //   acc += shape.radius ** 2
      // }
      acc += shape.area()

      return parseInt(acc)
    }, 0)
  }
}

const calc = new AreaCalculate( [
  new Circle(2),
  new Square(5),
  new Rect(2,5),
  new Triangle(2,4)
])

console.log(calc.sum());