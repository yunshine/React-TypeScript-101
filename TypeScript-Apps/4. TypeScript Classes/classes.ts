class Cafe {
    name: string;
    // 'Tokyo' is now a default value for 'area'...
    area: string = "Tokyo";
    specialty: string;
    
    // 'Coffee' is now a default value for 'specialty'...
    constructor() {
        this.specialty = "Coffee";
    }
}

let cafeKitsune = new Cafe();

cafeKitsune.area = "Aoyama";

console.log('cafeKitsune: ', cafeKitsune)