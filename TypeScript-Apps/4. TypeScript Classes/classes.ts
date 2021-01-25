class Cafe {
    // 'Unknown' is now a default value for 'name'...
    name: string = "Unknown";
    // 'Tokyo' is now a default value for 'area'...
    area: string = "Tokyo";
    // 'specialty' must be a string...
    specialty: string;

    // static properties are only accessible on the class model (ie. Cafe)...
    static castle: string = "Winterfell";
    
    // When a new Cafe instance is created, a name and area must be passed as arguments AND they must be strings...
    constructor(name, area) {
        this.name = name;
        // Another way to set 'Tokyo' as a default value for 'area'...
        this.area = area = "Tokyo";
        // this.specialty = specialty;
    }
}

// let cafeKitsune = new Cafe();
let cafeKitsune = new Cafe("Cafe Kitsune", "Aoyama");

// Error because a string was not passed as a specialty...
cafeKitsune.specialty = 12;

console.log('cafeKitsune: ', cafeKitsune);
console.log('Cafe castle: ', Cafe.castle);