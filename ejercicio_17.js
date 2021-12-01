var prefijos = [54, 55, 56, 57, 58];
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"];

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);


const validarPrefijo = (telefono) => {
  //genero objeto de telefonos/prefijos
  let telefonos = {};
  for (numero of prefijos) {
    telefonos[numero] = capitalizeFirstLetter(paises[prefijos.indexOf(numero)]);
  }
  //console.log(telefonos);
  let prefijo = telefono.substr(0,2); //2 primeros caracteres de mi numero
  return prefijo in telefonos ? `Este número pertenece a ${telefonos[prefijo]}` : "El número no pertenece a nuestros países"

};

console.log(validarPrefijo("8012345678"));
console.log(validarPrefijo("5412345678"));
console.log(validarPrefijo("5712345678"));

