//-	7. Carácter del medio
const middleCharacter = (str) => {
  let elements_quantity = str.length
  let index = elements_quantity-1
  let middleString = Math.floor(index / 2)
  if(!(index%2)){ // si el el total de indices es divisible por 2 (es par) o en otras palabras, si la cant de caracteres es impar => retorno la mitad(solo un char)
    return str[middleString]
  }
  else{//si no es par,ya se que es impar => retorno tanto el char del medio + el siguiente
    return str[middleString] + str[middleString+1]
  }

}

// console.log(middleCharacter("hola"))
// console.log(middleCharacter("cosas"))
// console.log(middleCharacter("zapato"))
// console.log(middleCharacter("holis"))
// console.log(middleCharacter("o"))
// console.log(middleCharacter("")) => NaN


