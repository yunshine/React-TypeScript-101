console.log("Console.log from TypeScript!");

// type annotation - this will tell TypeScript that whatever we pass in as an argument will be a string
function hello(string: String) {
    console.log("String From TypeScript: " + string);
}

hello("Eunjoo");
hello(122);