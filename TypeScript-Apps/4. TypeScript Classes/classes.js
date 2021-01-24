var Cafe = /** @class */ (function () {
    // 'Coffee' is now a default value for 'specialty'...
    function Cafe() {
        // 'Tokyo' is now a default value for 'area'...
        this.area = "Tokyo";
        this.specialty = "Coffee";
    }
    return Cafe;
}());
var cafeKitsune = new Cafe();
cafeKitsune.area = "Aoyama";
console.log('cafeKitsune: ', cafeKitsune);
