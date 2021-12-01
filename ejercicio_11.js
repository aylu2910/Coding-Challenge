// ------------------------ join ------------------------
// -	1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”

const join = (arr, str) => {
  let strResult = `${arr[0]}`;
  let limit = arr.length - 1;
  for (let i = 1; i <= limit; i++) {
    strResult += `${str}${arr[i]}`;
  }
  return strResult;
};

console.log(join([1, 2, 3, 4, 5], "-"));

// ------------------------ pop ------------------------
// -	2. “pop([1,2,3,4,5])” debe retornar 5

const pop = (arr) => arr.splice(arr.length - 1).join("");
//separo/corto a mi array,entre todos los elementos Y EL ULTIMO.me devuelve otro array con el ultimo elemento sacado
// y luego hago un join para que no me quede en formato array

console.log(pop([1, 2, 3]));

// ------------------------ filter ------------------------
// -	3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]

const filter = (arreglo, funcion) => {
  let arreglo_filter = [];
  for (e of arreglo) {
    if (funcion(e)) {
      arreglo_filter.push(e);
    }
  }
  return arreglo_filter;
};

console.log(
  filter([1, 2, 3, 4, 5], (e) => {
    return e % 2 === 0;
  })
);
// ------------------------ map ------------------------
// -	4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]

const map = (arreglo, funcion) => {
  let arreglo_map = [];
  for (e of arreglo) {
    arreglo_map.push(funcion(e));
  }
  return arreglo_map;
};

console.log(map([1, 2, 3, 4, 5], (e) => {return e * 10}))
