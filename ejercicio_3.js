//-	3. Sumatoria
const sumattion = (numero) => {
    if (numero === 1){
        return 1
    }else{
        return numero + sumattion(numero-1)
    }
}

console.log(sumattion(3))
console.log(sumattion(4))
console.log(sumattion(8))
console.log(sumattion(13))