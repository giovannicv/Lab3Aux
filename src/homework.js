(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  /* Second excercise */
let numbers = [1, 2, 3, 4, 5];

let multipliedNumbers = numbers.map(function(number) {
  return number * 5;
});

console.log(multipliedNumbers); // Resultado esperado: [5, 10, 15, 20, 25]


  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */
let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

let sortedNames = names.slice().sort();

console.log(sortedNames); // Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"]


  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

const uniqueLetters = [...new Set(data)];

console.log(uniqueLetters); // Resultado esperado: ['a', 'b', 'z', 'r', 'c']


const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */
  const largeWord = "abcdabcdABCD";

  const letterCount = largeWord.split('').reduce((count, letter) => {
    count[letter] = (count[letter] || 0) + 1;
    return count;
  }, {});
  
  console.log(letterCount);
  
})();
