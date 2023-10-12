
// Array de productos
const productos = [
    { nombre: "Manzana", categoria: "Frutas" },
    { nombre: "Leche", categoria: "Lácteos" },
    { nombre: "Pasta", categoria: "Alimentos secos" },
    { nombre: "Zanahoria", categoria: "Verduras" },
    // Agrega más productos según sea necesario
];

// Función para buscar los productos por nombre
function buscarProductoPorNombre(nombre) {
    const resultados = [];

    for (const producto of productos) {
        if (producto.nombre.toLowerCase().includes(nombre.toLowerCase())) {
            resultados.push(producto);
        }
    }

    return resultados;
}

// Función para filtrar los productos por su categoría
function filtrarProductosPorCategoria(numeroCategoria) {
    const categorias = ["Frutas", "Lácteos", "Alimentos secos", "Verduras"];
    const categoria = categorias[numeroCategoria - 1];

    return productos.filter(producto => producto.categoria === categoria);
}

// Ejemplo del uso
alert("¡Hola, Bienvenidos a mi segunda pre-entrega!");
alert("Ingrese sus datos para continuar");

let nombreIngresado = "";
let apellidoIngresado = "";

while (nombreIngresado === "" || apellidoIngresado === "") {
    nombreIngresado = prompt("Ingresar nombre");
    apellidoIngresado = prompt("Ingresar apellido");

    if (nombreIngresado === "" || apellidoIngresado === "") {
        alert("Error: Vuelva a intentarlo, ingrese su nombre y apellido!!");
    } else {
        alert("Bienvenido " + nombreIngresado + " " + apellidoIngresado);

        const busqueda = prompt("¿Qué producto desea buscar por nombre? (Deje en blanco si no desea buscar)");
        const categoriaNumero = prompt("Seleccione la categoría por número:\n1) Frutas\n2) Lácteos\n3) Alimentos secos\n4) Verduras\n(Deje en blanco para no filtrar)");

        if (busqueda) {
            const resultadosBusqueda = buscarProductoPorNombre(busqueda);
            alert("Resultados de la búsqueda:");
            console.log(resultadosBusqueda);
        }

        if (categoriaNumero) {
            const productosFiltrados = filtrarProductosPorCategoria(parseInt(categoriaNumero));
            alert("Productos en la categoría seleccionada:");
            console.log(productosFiltrados);
        }
    }
}

function sumar() {
    const kilos1 = parseFloat(document.getElementById('inputKilos1').value);
    const kilos2 = parseFloat(document.getElementById('inputKilos2').value);
    const resultado = kilos1 + kilos2;
    document.getElementById('resultado').textContent = resultado + " kg";
}

// Función para realizar la resta
function restar() {
    const kilos1 = parseFloat(document.getElementById('inputKilos1').value);
    const kilos2 = parseFloat(document.getElementById('inputKilos2').value);
    const resultado = kilos1 - kilos2;
    document.getElementById('resultado').textContent = resultado + " kg";
}













































