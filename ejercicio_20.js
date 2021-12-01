const rotar = (arreglo, numero) => {
  let elementos = arreglo.length;
  while (numero <= elementos) {
    //agrego esta mini validacion para que no exceda la cant de indices
    let array1 = arreglo.slice(0, numero);
    let array2 = arreglo.slice(numero, elementos);
    return array2.concat(array1);
  }
  return "No es posible realizar la operacion";
};

// -	rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
// -	rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]

// console.log(rotar([1, 2, 3, 4, 5], 1))
// console.log(rotar([1, 2, 3, 4, 5], 2))
// console.log(rotar([1, 2, 3, 4, 5], 3))
// console.log(rotar([1, 2, 3, 4, 5], 4));
// console.log(rotar([1, 2, 3, 4, 5], 5))
// console.log(rotar([1, 2, 3, 4, 5], 6))
// console.log(rotar([1, 2, 3, 4, 5], 0))
// console.log(rotar([1, 2, 3, 4, 5], -1))
