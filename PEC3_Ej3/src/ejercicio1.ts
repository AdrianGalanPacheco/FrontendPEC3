// Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.*/

function printArray(array: Array<number>): void {
  //code to print the array on console
  console.log(array.join(","));
}

let array: number[] = [2, 3, 4];

// Elimina y devuelve el primer elemento
console.log(array.shift()); //2
printArray(array); // 3,4

// Añade un 5 al final
array.push(5);
printArray(array); // 3,4,5

// Elimina y devuelve el último elemento
console.log(array.pop()); //5
printArray(array); // 3,4

// Añade un 1 al final
array.push(1);
printArray(array); // 3,4,1

// Añade un 8 al inicio
array.unshift(8);
printArray(array); // 8,3,4,1

/** check if every number is greater than 3 */
let everyisgreater = array.every((num) => num > 3);
console.log(everyisgreater); //false

/** check if every number is less than 10 */
let everyisless = array.every((num) => num < 10);
console.log(everyisless); //true

// Ordena el array ascendentemente
console.log(array.sort((a, b) => a - b)); //1,3,4,8
printArray(array);

// Ordena el array descendentemente
console.log(array.sort((a, b) => b - a)); //8,4,3,1
printArray(array);
