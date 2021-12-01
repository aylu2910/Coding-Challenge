//-	6. Similar String.split()
const split = (str) =>{
    let array = []
    for (c of str){
        array.push(c)
    }
    return array

}

console.log(split("hola"))
console.log(split("chau"))
console.log(split("hola como estas ?"))