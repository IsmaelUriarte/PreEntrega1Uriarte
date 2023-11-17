
//CODIGO DEL SLIDER

//SLIDER 1

let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 3;
let currentSlide = 0;

let sliderContainerWidth = sliderContainer.clientWidth;
let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = (cards.length * cardWidth) + 'px';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px';
}

function prev() {
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.marginLeft = (-currentSlide * cardWidth) + 'px';
    }
}

function next() {
    if (currentSlide < (cards.length - elementsToShow)) {
        currentSlide++;
        slider.style.marginLeft = (-currentSlide * cardWidth) + 'px';
    }
}



// let sliderContainer2 = document.getElementById('sliderContainer2');
// let slider2 = document.getElementById('slider2');
// let cardds = slider2.getElementsByTagName('li');

// let elementsToShow2 = 3;
// let currentSlide2 = 0;

// let sliderContainer2Width = sliderContainer2.clientWidth;
// let carddWidth = sliderContainer2Width / elementsToShow2;

// slider2.style.width = (cardds.length * carddWidth) + 'px';

// for (let index = 0; index < cardds.length; index++) {
//     const element = cardds[index];
//     element.style.width = carddWidth + 'px';
// }

// function siguiente() {
//     if (currentSlide2 > 0) {
//         currentSlide2--;
//         slider2.style.marginLeft = (-currentSlide2 * carddWidth) + 'px';
//     }
// }

// function anterior() {
//     if (currentSlide2 < (cardds.length - elementsToShow2)) {
//         currentSlide2++;
//         slider2.style.marginLeft = (-currentSlide2 * carddWidth) + 'px';
//     }
// }



//<------------------------------------------->


// REGISTRO DE USUARIO

document.getElementById('boton-registro').addEventListener('click', function () {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correoLogin = document.getElementById('correoLogin').value;
    const contrasenaLogin = document.getElementById('contrasenaLogin').value;

    if (nombreCompleto && correoLogin && contrasenaLogin) {
        // Se crea un objeto del usuario.
        const usuario = {
            nombreCompleto,
            correoLogin,
            contrasenaLogin,
        };

        // Se almacenan los datos del usuario en el localStorage
        localStorage.setItem('usuario', JSON.stringify(usuario));

        alert('¡Bienvenido ' + nombreCompleto + '! Registro exitoso. Ahora puedes iniciar sesión.');
    } else {
        alert('Por favor, completa todos los campos de registro.');
    }
});

// INICIO DE SESIÓN
document.getElementById('boton-iniciar-sesion').addEventListener('click', function () {
    const correoInicio = document.getElementById('correoInicio').value;
    const contrasenaInicio = document.getElementById('contrasenaInicio').value;

    iniciarSesion(correoInicio, contrasenaInicio);
});

// Función para iniciar sesión
function iniciarSesion(correo, contrasena) {
    if (correo && contrasena) {
        // Se recuperan los datos del usuario guardados en el localStorage
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        if (usuario && usuario.correoLogin === correo && usuario.contrasenaLogin === contrasena) {
            alert('¡Hola ' + usuario.nombreCompleto + '! Iniciaste sesión exitosamente.');
            // Detener en caso de error o proceder a realizar acciones después del inicio de sesión con éxito
        } else {
            alert('Error en el inicio de sesión. Verifica tu correo y contraseña.');
        }
    } else {
        alert('Por favor, completa todos los campos de inicio de sesión.');
    }
}

function toggleLoginForm() {
    var loginForm = document.querySelector('.login-form');
    loginForm.classList.toggle('removee');
}

function toggleContainerForm() {
    var containerForm = document.querySelector('.container-form');
    containerForm.classList.toggle('loginn');
}



//<----------------------->


        const btnCart = document.querySelector('.container-cart-icon');
        const containerCartProducts = document.querySelector(
            '.container-cart-products'
        );
        
        btnCart.addEventListener('click', () => {
            containerCartProducts.classList.toggle('hidden-cart');
        });
        
        /* ========================= */
        const cartInfo = document.querySelector('.cart-product');
        const rowProduct = document.querySelector('.row-product');
        
        // Lista de todos los contenedores de productos
        const productsList = document.querySelector('.container-items');
        
        // Variable de arreglos de Productos
        let allProducts = [];
        
        const valorTotal = document.querySelector('.total-pagar');
        
        const countProducts = document.querySelector('#contador-productos');
        
        const cartEmpty = document.querySelector('.cart-empty');
        const cartTotal = document.querySelector('.cart-total');
        
        productsList.addEventListener('click', e => {
            if (e.target.classList.contains('btn-add-cart')) {
                const product = e.target.parentElement;
        
                const infoProduct = {
                    quantity: 1,
                    title: product.querySelector('h2').textContent,
                    price: product.querySelector('p').textContent,
                };
        
                const exits = allProducts.some(
                    product => product.title === infoProduct.title
                );
        
                if (exits) {
                    const products = allProducts.map(product => {
                        if (product.title === infoProduct.title) {
                            product.quantity++;
                            return product;
                        } else {
                            return product;
                        }
                    });
                    allProducts = [...products];
                } else {
                    allProducts = [...allProducts, infoProduct];
                }
        
                showHTML();
            }
        });
        
        rowProduct.addEventListener('click', e => {
            if (e.target.classList.contains('icon-close')) {
                const product = e.target.parentElement;
                const title = product.querySelector('p').textContent;
        
                allProducts = allProducts.filter(
                    product => product.title !== title
                );
        
                console.log(allProducts);
        
                showHTML();
            }
        });
        
        // Funcion para mostrar  HTML
        const showHTML = () => {
            if (!allProducts.length) {
                cartEmpty.classList.remove('hidden');
                rowProduct.classList.add('hidden');
                cartTotal.classList.add('hidden');
            } else {
                cartEmpty.classList.add('hidden');
                rowProduct.classList.remove('hidden');
                cartTotal.classList.remove('hidden');
            }
        
            // Limpiar HTML
            rowProduct.innerHTML = '';
        
            let total = 0;
            let totalOfProducts = 0;
        
            allProducts.forEach(product => {
                const containerProduct = document.createElement('div');
                containerProduct.classList.add('cart-product');
        
                containerProduct.innerHTML = `
                    <div class="info-cart-product">
                        <span class="cantidad-producto-carrito">${product.quantity}</span>
                        <p class="titulo-producto-carrito">${product.title}</p>
                        <span class="precio-producto-carrito">${product.price}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon-close"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                `;
        
                rowProduct.append(containerProduct);
        
                total =
                    total + parseInt(product.quantity * product.price.slice(1));
                totalOfProducts = totalOfProducts + product.quantity;
            });
        
            valorTotal.innerText = `$${total}`;
            countProducts.innerText = totalOfProducts;
        };


        // SUSCRIPCION

        function suscribirse() {
            // Valor del campo de correo electrónico
            var email = document.getElementById('emailInput').value;
        
            // Validar el correo electrónico 
            if (email.trim() === '') {
                mostrarAlerta('Por favor, ingresa tu correo electrónico.', 'alert-error');
                return;
            }
        
            // Expresión regular para validar formato de correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!emailRegex.test(email)) {
                mostrarAlerta('Por favor, ingresa un correo electrónico válido.', 'alert-error');
                return;
            }
        
            // Mostrar alerta de agradecimiento por suscribirse
            mostrarAlerta('¡Gracias por suscribirte!', 'alert-success');
        
            // Limpieza del campo de correo electrónico después de haberse suscrito
            document.getElementById('emailInput').value = '';
        }
        
        function mostrarAlerta(mensaje, tipo) {
            var customAlert = document.getElementById('customAlert');
            customAlert.textContent = mensaje;
        
            // Aplicar clase de estilo según el tipo de alerta
            customAlert.className = tipo;
        
            // Mostrar el elemento personalizado
            customAlert.style.display = 'block';
        
            // Ocultar el elemento después de 2 segundos
            setTimeout(function() {
                customAlert.style.display = 'none';
            }, 2000);
        }


        // PROMOS

        function verMas(promo) {
            // Seleccionar el primer párrafo dentro de la sección
            var parrafo = document.querySelector('.section-home');

            // Cambiar el contenido del párrafo
            parrafo.textContent = 'Detalles de la promo "' + promo + '"';
        }

        function verMas(promoId) {
            // Seleccionar el elemento de detalles correspondiente a la promo
            var detalles = document.querySelector('.detalles');
            
            // Mostrar u ocultar los detalles al hacer clic en el botón
            if (detalles.style.display === 'none' || detalles.style.display === '') {
                detalles.style.display = 'block';
            } else {
                detalles.style.display = 'none';
            }
        }

        function verMas2(promoId) {
            // Seleccionar el elemento de detalles correspondiente a la promo
            var detalles2 = document.querySelector('.detalles-2');
            
            // Mostrar u ocultar los detalles al hacer clic en el botón
            if (detalles2.style.display === 'none' || detalles2.style.display === '') {
                detalles2.style.display = 'block';
            } else {
                detalles2.style.display = 'none';
            }
        }


        function verMas3(promoId) {
            // Seleccionar el elemento de detalles correspondiente a la promo
            var detalles3 = document.querySelector('.detalles-3');
            
            // Mostrar u ocultar los detalles al hacer clic en el botón
            if (detalles3.style.display === 'none' || detalles3.style.display === '') {
                detalles3.style.display = 'block';
            } else {
                detalles3.style.display = 'none';
            }
        }


        function verMas4(promoId) {
            // Seleccionar el elemento de detalles correspondiente a la promo
            var detalles4 = document.querySelector('.detalles-4');
            
            // Mostrar u ocultar los detalles al hacer clic en el botón
            if (detalles4.style.display === 'none' || detalles4.style.display === '') {
                detalles4.style.display = 'block';
            } else {
                detalles4.style.display = 'none';
            }
        }







































