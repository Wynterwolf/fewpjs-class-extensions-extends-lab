// Your code here
class Polygon {
    constructor(sides) {
        // this.array = array
        this.sides = sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        const sides = this.sides
        let sum = 0
        sides.forEach(function(side){
            sum += side
        })
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        return (this.countSides === 3 && (a+b > c && a+c > b && b+c > a) )
    }
}

class Square extends Polygon {
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        const d = this.sides[3]
        return (this.countSides === 4 && (a+b === c+d))
    }
    get area(){
        const a = this.sides[0]
        const b = this.sides[1]
        return (a * b)
    }
}