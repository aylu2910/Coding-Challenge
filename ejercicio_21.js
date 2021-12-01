//-	21. Consecutivos similares
const consecutivosSimilares = (str) => {
    let cont = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            cont++
        }
    }
    return cont

}

console.log(consecutivosSimilares("AAABBB"))
