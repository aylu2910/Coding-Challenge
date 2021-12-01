//-	13. Arreglo de objetos
const arregloDeObjetos = (numero) => {
    let array = []
    for (let i = 1; i <= numero; i++) {
        array.push({ "valor": i })
    }
    return array
}