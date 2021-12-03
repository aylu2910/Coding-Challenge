//-	3. Sumatoria
const sumattion = (numero) => numero === 1 ? 1 : numero + sumattion(numero-1)

sumattion(3)
sumattion(4)
sumattion(8)
sumattion(13)