//-	10. Mezclando arreglos
const finalArray = (array1, array2) => {
    let finalArray = []
    for (let i = 0; i < array1.length; i++) {
        finalArray.push(array1[i])
        finalArray.push(array2[i])
    }
    return finalArray
}


console.log(finalArray([1, 2, 3, 4], ["h", "o", "l", "a"]))

console.log(["h","p"],[1,2,3,4])
