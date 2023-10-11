
// Array de productos
const productos = [
    { nombre: "Manzana", categoria: "Frutas" },
    { nombre: "Leche", categoria: "Lácteos" },
    { nombre: "Pasta", categoria: "Alimentos secos" },
    { nombre: "Zanahoria", categoria: "Verduras" },
    // Agrega más productos según sea necesario
];

  // Función para buscar productos por nombre
function buscarProductoPorNombre(nombre) {
    const resultados = [];
    

for (const productos of productos) {
    
    
if (productos.nombre.toLowerCase().includes(nombre.toLowerCase())) {
        resultados.
        resultados

    
push(productos);
    }
    }
    return resultados;
}

  // Función para filtrar productos por categoría
function filtrarProductosPorCategoria(categoria) {
    return productos.filter(producto => producto.categoria === categoria);
}

  // Ejemplo de uso
alert("¡Bienvenidos a la dietética los hermanos, seleccione sus productos!");

alert("Ingrese sus datos para continuar");

let nombreIngresado = "";
let apellidoIngresado = "";

while (nombreIngresado === "" || apellidoIngresado === "") {
    nombreIngresado = 
    nombreIngresado =
prompt("Ingresar nombre");
    apellidoIngresado = 
    apellidoIngresado =
prompt("Ingresar apellido");

    if (nombreIngresado === "" || apellidoIngresado === "") {
    alert("Error: Ingrese nombre y apellido.");
    } else {
        alert
        alert("Bienvenido " + nombreIngresado + " " + apellidoIngresado);

            const busqueda = prompt("¿Qué producto desea buscar por nombre? (Deje en blanco si no desea buscar)");
            const categoria = prompt("¿Desea filtrar por categoría? (Deje en blanco si no desea filtrar)");

            if (busqueda) {
                const resultadosBusqueda = buscarProductoPorNombre(busqueda);
                alert("Resultados de la búsqueda:");
                console.log(resultadosBusqueda);
            }

            if (categoria) {
                const productosFiltrados = filtrarProductosPorCategoria(categoria);
                alert("Productos en la categoría " + categoria + ":");
                console.log(productosFiltrados);
            }
        }
    }






































