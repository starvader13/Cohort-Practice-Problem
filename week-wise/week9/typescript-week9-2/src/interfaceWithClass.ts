
interface Person{
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string): void{
        console.log(`${phrase} ${this.name}`);
    }
}

const e:Employee = new Employee("Ashutosh", 20)
e.greet("hello");
