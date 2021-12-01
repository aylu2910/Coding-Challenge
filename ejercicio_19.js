//OPCION 1

const palindromo = (palabra) => {
    palabra = palabra.toLowerCase() //paso todo a "limpio" => mismo formato,pasando todo a minuscula
    return palabra === reversarPalabra(palabra)
}
const reversarPalabra = str => str.split("").reverse().join("")
// lo divido en arreglo-realizo un reverso de los elementos- y luego con el join los uno nuevamente => de manera reversada

// console.log(palindromo("anilinA"))
// console.log(palindromo("hola"))


// OPCION 2 - otra forma de hacerlo ya que mis queridos profes me recomendaron no aprovecharse tanto de los metodos

const palindromo2 = (palabra) => {
  let elements = palabra.length;
  let index = elements - 1;
  let mitad = Math.floor(index / 2);
  palabra = palabra.toLowerCase();
  let esPalindromo = true;
  for (let i = 0; i < mitad; i++) {
    //analizo la palabra a traves de una comparacion de la primera parte con la segunda parte,como si fuera un espejo
    if (palabra[i] == palabra[index - i]) {
    //si las letras son iguales sigo avanzando hasta que llegue a la mitad (sin incluir este ultimo en el analisis)
      i++;
    } else {
        //en caso de que no sean iguales, ya se que no hay una coincidencia,por lo tanto, no es palindromo
      esPalindromo = false;
    }
  }
  return esPalindromo;
};

console.log(palindromo2("hola"));
console.log(palindromo2("anilinA"));