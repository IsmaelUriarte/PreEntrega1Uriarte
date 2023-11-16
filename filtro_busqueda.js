
const mixes = [
    {
        "nombre": "Mix 1",
        "imagen": "./images/alimentos-dieteticos.jpg",
        "precio": 80
    },
    {
        "nombre": "Mix 2",
        "imagen": "./images/alimentos-dieteticos.jpg",
        "precio": 20
    },
    {
        "nombre": "Mix 3",
        "imagen": "./images/alimentos-dieteticos.jpg",
        "precio": 50
    },
    {
        "nombre": "Mix 4",
        "imagen": "./images/alimentos-dieteticos.jpg",
        "precio": 90
    },
    {
        "nombre": "Mix 5",
        "imagen": "./images/alimentos-dieteticos.jpg",
        "precio": 90
    },
    {
        "nombre": "Mix 6",
        "imagen": "./images/alimentos-dieteticos.jpg",
        "precio": 90
    }
];

const searchInput = document.getElementById('searchInput');
const mixesList = document.getElementById('mixes-list');

function filtrarMixes() {
    const filtro = searchInput.value.toLowerCase();
    const mixesFiltrados = mixes.filter(mix => {
        const nombreMix = mix.nombre.toLowerCase();
        const precioMix = mix.precio.toString(); // Convertir precio a cadena para búsqueda

        return nombreMix.includes(filtro) || precioMix.includes(filtro);
    });

    mostrarMixes(mixesFiltrados);
}

function mostrarMixes(mixesMostrados) {
    mixesList.innerHTML = '';

    if (searchInput.value.trim() === '') {
        return; // No mostrar contenido siempre que el campo de búsqueda está vacío.
    }

    if (mixesMostrados.length === 0) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.textContent = 'No se encontraron productos que coincidan.';
        mixesList.appendChild(mensajeDiv);
        return;
    }

    mixesMostrados.forEach(mix => {
        const mixDiv = document.createElement('div');
        mixDiv.classList.add('item');

        mixDiv.innerHTML = `
            <figure class="overflow-hidden">
                <img class="rounded-t-xl transform transition-all ease-in hover:scale-105 object-cover"
                    src="${mix.imagen}"
                    alt="${mix.nombre}"
                />
            </figure>
            <div class="info-product flex flex-col rounded-b-xl pl-5 pb-7 pr-5 bg-zinc-200 leading-loose gap-2.5">
                <h2 class="pt-2.5 font-semibold text-zinc-700 text-xl">${mix.nombre}</h2>
                <p class="price text-xl pb-2 font-semibold text-zinc-700">$${mix.precio}</p>
                <button class="btn-add-cart p-x-5 pb-2 pt-2 border-none font-semibold text-zinc-700 bg-lime-700/50 transition-all ease-in hover:scale-95 ">Añadir al carrito</button>
            </div>
        `;

        mixesList.appendChild(mixDiv);
    });
}

// Vincular el evento input al campo de búsqueda
searchInput.addEventListener('input', filtrarMixes);

// Ejecutar la función inicialmente para ocultar la lista
window.addEventListener('DOMContentLoaded', function() {
    filtrarMixes();
});