var Cafe = /** @class */ (function () {
    // When a new Cafe instance is created, a name and area must be passed as arguments AND they must be strings...
    function Cafe(name, area) {
        // 'Unknown' is now a default value for 'name'...
        this.name = "Unknown";
        // 'Tokyo' is now a default value for 'area'...
        this.area = "Tokyo";
        this.name = name;
        // Another way to set 'Tokyo' as a default value for 'area'...
        this.area = area = "Tokyo";
        // this.specialty = specialty;
    }
    // static properties are only accessible on the class model (ie. Cafe)...
    Cafe.castle = "Winterfell";
    return Cafe;
}());
// let cafeKitsune = new Cafe();
var cafeKitsune = new Cafe("Cafe Kitsune", "Aoyama");
// Error because a string was not passed as a specialty...
cafeKitsune.specialty = 12;
console.log('cafeKitsune: ', cafeKitsune);
console.log('Cafe castle: ', Cafe.castle);
