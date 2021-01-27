class Person {
    name : string;
    
    constructor(name : string) {
        this.name = name;
    }

    dance() {
        console.log(`${this.name} is dancing!`);
    }
}

let noriko= new Person("Noriko");

noriko.dance();

class AwesomePerson extends Person {
    dance() {
        console.log(`Wow! ${this.name} is so AWESOME!`);
        super.dance();
    }
}

let eunjoo = new AwesomePerson("Eunjoo");
eunjoo.dance();