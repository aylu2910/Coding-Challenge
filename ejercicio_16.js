var abc = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const warWords = (palabra1, palabra2) => {
    let puntosPalabra1 = calcularPuntos(palabra1)
    let puntosPalabra2 = calcularPuntos(palabra2)
    return p1 > p2 ?  puntosPalabra1 :  puntosPalabra2
}

const calcularPuntos = (palabra) => {
    palabra = palabra.toLowerCase()
    let palabraPuntos = 0;
    for (caracter of palabra) {
        palabraPuntos += abc[caracter];
      }
    return palabraPuntos;

}
console.log(contarPuntos("hola"))
console.log(warWords("Hola","chau"))



