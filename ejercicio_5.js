//-	5. Nuevo Arreglo
const nuevoArreglo = (numero) => {
  let arr = [];
  for ( let i = 1; i <= numero; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(nuevoArreglo(10));
