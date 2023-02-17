
// De los siguientes problemas, selecciona uno y resuélvelo usando JS (puntos extra por usar pruebas
//     TDD)
//     1.- Implementa una función que determine si una cadena de texto dada esta formada por caracteres
//     únicos, considera mayúsculas, minúsculas y caracteres especiales
//     (3 pts)
//     //Por Ejemplo
//     hasUniqueCharacters("String") // true
//     hasUniqueCharacters("Some String") // false

const hasUniqueCharacters = (string = '') => {
    const dictionary = {};
    const stringWithoutSpaces = string.replace(/([^a-zA-Z])\w/g, "")

    stringWithoutSpaces.split("").forEach(currentItem => {

        if (dictionary.hasOwnProperty(currentItem)) {
            dictionary[currentItem] = dictionary[currentItem] + 1
        } else {
            dictionary[currentItem] = 1
        }

    });

    // console.log(dictionary);
    return !!Object.values(dictionary).every(value => value === 1);

}

console.log(hasUniqueCharacters("String"));
console.log(hasUniqueCharacters("String String"));