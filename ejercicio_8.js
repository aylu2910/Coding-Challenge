//-	8. Mover ceros a lo último
const moveZeros = (array) => {
    let arrayFinal = []
    let array_zero = []
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === 0) {
            array_zero.push(array[i])
        } else {
            arrayFinal.push(array[i])
        }
    }
    return arrayFinal.concat(array_zero)
}   

console.log(moveZeros([1, 20, 1]));
