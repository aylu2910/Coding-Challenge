// OPCION 1 - manteniendo duplicados

const minSum =(numeros)=>{
    let numero1 = Math.min(...numeros)
    numeros.splice(numeros.indexOf(numero1),1)
    let numero2 = Math.min(...numeros)
    return numero1+numero2
    
}


// OPCION 2 - sin mantener duplicados - solo valores unicos

const minSum2 =(numeros)=>{
    let numerosSinDuplicados = [...new Set(numeros)] //remuevo duplicados con un set,para asi tener valores unicos
    let numero1 = Math.min(...numerosSinDuplicados)
    numerosSinDuplicados.splice(numerosSinDuplicados.indexOf(numero1),1)
    let numero2 = Math.min(...numerosSinDuplicados)
    return numero1+numero2
    
}
console.log(minSum([9,8,10,1,50,1]))
console.log(minSum2([9,8,10,1,50,1]))
