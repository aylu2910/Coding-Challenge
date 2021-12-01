/*
-	18. {value: key} kelue: vay
Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro.
 -Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
 -Si el parámetro es un objeto, la función deberá devolver otro objeto.
    ->Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.
*/
var prueba = {
	nombre: "santi",
	edad: 22,
	nacionalidad: "de otro planeta",
	documento: 44444444,	
}

const reverseKeys = (variable)=>{
    //debido a que un array es considerado un objeto.Hago la validacion de la siguiente manera
    if(typeof(variable)=="object" && !Array.isArray(variable)){
        let objetoNuevo = {}
        for (key in variable){
            let valueObjet = variable[key]
            if (typeof(valueObjet) =="string"){
                objetoNuevo[valueObjet] = key
            }
            else{
                objetoNuevo[key] = valueObjet
            }
        }
        return objetoNuevo
    }
    else{
        //si no es un objeto propiamiente dicho, puede ser un array o cualquier otro tipo.
        //En todo caso distingo estos 2 casos para luego retornar un mensaje u otro
        let message = ""
        Array.isArray(variable)? message =`error, input can’t be an Array`: message =`error, input can’t be a ${typeof(variable)}`
        return message
    }

}
// console.log(prueba)
// console.log(reverseKeys(prueba))
// console.log(reverseKeys(false))
