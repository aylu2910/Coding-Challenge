//-	14. Arreglo de objetos
const arregloDeObjetos = (numero, palabra) => {
    let array = []
    for (let i = 1; i <= numero; i++) {
        obj = {}
        obj[palabra] = i
        array.push(obj)
    }
    return array
}

console.log(arregloDeObjetos(3, "hola"))