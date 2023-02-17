/* 2.- Escribe un programa que tome como parámetro un número entero y regrese una lista (array) con
todos los factores primos del número pasado como argumento. Considera los siguientes ejemplos.
(4 pts)
//Salida
primeFactors(20) // [2, 2 ,5] es decir, 2*2*5 = 20
primeFactors(330) // [2, 3, 5, 11] es decir, 2*3*5*11 = 330 */

function primeFactors(number = 0) {
    if (number === 1 || number === 0) return;
    const factors = [];
    while (number % 2 === 0) {
        factors.push(2);
        number = Math.floor(number / 2);
    }

    //Number is prime by this point

    for (let index = 3; index <= number; index++) {
        if (number % index === 0) {
            factors.push(index);
            number = number / index;
        }
    }
    return factors;
}


const firstTest = primeFactors(20);
// console.log(firstTest);
const secondtest = primeFactors(330);
// console.log(secondtest);