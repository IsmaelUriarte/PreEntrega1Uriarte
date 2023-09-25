//Bienvenida a nuestra dietetica, el usuario debe ingresar su nombre y apellido obligatoriamente para poder realizar su selección de productos
alert("¡Bienvenidos a la dietética los hermanos, selecciones sus productos!");

let nombreIngresado   = "";
let apellidoIngresado = "";

while (nombreIngresado ==="" || apellidoIngresado ==="") {
    nombreIngresado = prompt("Ingresar nombre"); 
    apellidoIngresado = prompt("Ingresar apellido");

    if (nombreIngresado ==="" || apellidoIngresado ==="") {
        alert("Error: Ingresar nombre y apellido.")
    }else{
        alert("Bienvenido "+nombreIngresado + " " + apellidoIngresado);
    }
}
// productos dieteticos, vende mix dieteticos por kilo, el cliente pone cantidad, marca seleccionada, da como resultados valores a pagar y costo de envio calculuado por cantidad del producto seleccionado.
// variables globales
const mixdefrutosA = 3300
const mixdefrutosB = 2200
const mixdefrutosC = 1100

let cantidad; 
let marcaAlimento;
let resultado;

//operacion multiplicar
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}
//paso 2: que nos diga por prompt la cantidad de kilos de alimento para mascota que quiere llevar, teniendo en cuenta que 0. cierra el ciclo.
//paso 3: elija la marca de alimento que desee comprar, con A B y C.

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingrese la cantidad de mix que desea llevar! Para terminar presione 0"));
    
    if (cantidad === 0){
        break;
    }

    marcaAlimento = prompt("Seleccione el mix que mas le guste:\n\ -Si quiere mix-de frutos secos Premium ' Ingrese ' = 1 \n\ -Si quiere mix-de frutos secos Tropicales ' Ingrese ' = 2 \n\ -Si quiere mix-de frutos secos Económico ' Ingrese ' = 3");

    switch (marcaAlimento){

        case "1":
        resultado = multiplicar(mixdefrutosA, cantidad);
        alert("Debe abonar $ "+ resultado + " por su compra de mix-de frutos secos Premium");
        break;

        case "2":
            resultado = multiplicar(mixdefrutosB, cantidad);
            alert("Debe abonar $ "+ resultado + " por su compra de mix-de frutos secos Tropicales");
            break;

        case "3":
            resultado = multiplicar(mixdefrutosC, cantidad);
            alert("Debe abonar $ "+ resultado+ " por su compra de mix-de frutos secos Económico");
            break;

        default:
            alert("Operación Invalida");
            break;
    }

    if (cantidad >= 10 ){
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=5 ){
        valorEnvio = 200
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 250
        alert("Su costo de envio es $"+ valorEnvio);
    }
}
alert("Gracias por su compra")



