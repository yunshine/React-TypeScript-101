// an interface is essentially a definition or blueprint for an object that tells TypeScript what that object is going to be like...
// the argument that's being passed in (city) is being defined as CitiesVisited...
// function printCityName(city) {
function printCityName(city) {
    console.log(city.name);
}
printCityName({ name: "Tokyo", timesVisited: 309 });
printCityName({ name: "Seattle", timesVisited: 1 });
// the function call below will not work because 1) 'name' is not defined, AND 2) 'timesVisited' is missing...
printCityName({ randomLabel: "Los Angeles" });
