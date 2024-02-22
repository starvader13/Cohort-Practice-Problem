class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak(){
        console.log(`${this.name} says ${this.speaks}`);
    }

    static myType(){
        console.log("Animal");
    }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");
dog.speak();

Animal.myType();