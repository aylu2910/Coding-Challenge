//-	3. Sumatoria
const sumattion = (numero) => numero === 1 ? 1 : numero + sumattion(numero-1)

console.log(sumattion(3))
console.log(sumattion(4))
console.log(sumattion(8))
console.log(sumattion(13))