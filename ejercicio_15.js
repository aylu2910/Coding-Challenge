//-	15. Única propiedad
const oneProperty = (arreglo, propiedad) => {
  let lista = [];
  for (elemento of arreglo) {
    //por cada objeto dentro del arreglo
    let objeto = {};
    //creo un elemento nuevo con la propiedad y su valor correspondiente
    objeto[propiedad] = elemento[propiedad];
    lista.push(objeto);
  }
  return lista;
};

let arreglo = [
  { name: "lucas", edad: 20 },
  { name: "santi", edad: 22 },
  { name: "aylu", edad: 23 },
  { name: "ore", edad: 29 },
];

console.log(oneProperty(arreglo, "name"));
console.log(oneProperty(arreglo, "edad"));
