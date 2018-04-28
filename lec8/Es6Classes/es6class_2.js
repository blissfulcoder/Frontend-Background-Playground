class Animal {
    constructor(color) {
        //private
        let legs = 4
        //public
        this.color = color
        this.getLegs = () => {
            return legs;
        }
    }

    getEyes () {
        return 2;
    }


}

let a = new Animal("brown")
console.log(a)
console.log(a.getLegs())
a.getLegs = () => 5;
console.log(a)
console.log(a.getLegs())
