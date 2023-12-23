class Animal {
    constructor(breed, legCount, speaks) {
        this.breed = breed;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak() {
        console.log(`${this.speaks}`)
    }
}

class Dog extends Animal {
    constructor(breed, legCount, speaks, isPet) {
        super(breed, legCount, speaks)
        this.isPet = isPet;
    }

    speak() {
        super.speak()
        console.log("Animal Extended By Dog")
    }
}

class Car extends Animal {
    constructor(breed, legCount, speaks, isPet) {
        super(breed, legCount, speaks)
        this.isPet = isPet;
    }

    speak() {
        super.speak()
        console.log("Animal Extended By Cat")
    }
}

class Lion extends Animal {
    constructor(breed, legCount, speaks, isPet) {
        super(breed, legCount, speaks, isPet)
        this._isCarnivores = null
    }

    get isCarnivores() {
        return this._isCarnivores
    }

    set isCarnivores(isCarnivores) {
        if (typeof (isCarnivores) != 'boolean') {
            throw "String daalo bhai, kya input kar rahe."
        }
        this._isCarnivores = isCarnivores
    }

    speak() {
        console.log(`${this.speaks} for carnivores: ${this.isCarnivores}`)
    }

    static className(){
        console.log("Belongs to Lion class")
    }
}

const lion1 = new Lion("lion", 4, "bhow-bhow", "yes")
lion1.isCarnivores = true
lion1.speak()
Lion.className()
