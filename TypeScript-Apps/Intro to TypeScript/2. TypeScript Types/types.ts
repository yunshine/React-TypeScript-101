// "any" allows any type to be used. This defeats the purpose of types, so you generally shouldn't used "any"...
let firstVar : any = 1;
firstVar = "Eunjoo";

let nameOfWife = "Eunjoo";

let numberOfEunjoos : number = 1;

let eunjooIsDope : boolean = true;

// an array of any type...
let meaningfulTerms : any[] = ["Love", 718, true];

// an array of ONLY strings...
let placesVisited : string[] = ["Seoul", "Tokyo", "Okinawa", "Hakone", "Seattle", "Portland"];

// a function must return a string...
function sayHi(name) : string{
    return `Hi, ${name}!!!`;
}

// a function can return any type...
function sayHi(name) : void{
    console.log("Value from function sayHi: ", name);
}


// re-visit enum at a later time for the sake of clarification...
