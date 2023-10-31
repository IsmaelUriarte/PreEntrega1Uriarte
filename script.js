
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


//<------------------------------------------->


// Registro de usuario
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

alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    } else {
        alert('Por favor, complete todos los campos de registro.');
    }
});

// Inicio de Sesión
document.getElementById('boton-iniciar-sesion').addEventListener('click', function () {
    const correoInicio = document.getElementById('correoInicio').value;
    const contrasenaInicio = document.getElementById('contrasenaInicio').value;


if (correoInicio && contrasenaInicio) {
        // Se recuperan los datos del usuario guardados en el localStorage
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        if (usuario && usuario.correoLogin === correoInicio && usuario.contrasenaLogin === contrasenaInicio) {
            alert('¡Inicio de sesión exitoso!');
            // Detener en caso de error o proceder a realizar acciones después del inicio de sesión con exito
        } else {
            alert('Fallo en el inicio de sesión. Por favor, verifique su correo y contraseña.');
        }
    } 
        else {
        alert('Por favor, complete todos los campos de inicio de sesión.');
    }
});

// para el Tutor, primero paso a comentarte que estuve muy frustrado ya que java script
// me esta costando bastante y espero puedas comprender que quizas me cuesta entender y comprender
// la logica de este lenguaje, y bueno paso dejarte unas explicaciones acerca de mi proyecto
// para que mas o menos entiendas y si puedes ayudarme, uno de los primeros temitas y problemas es con 
// respecto al slider el cual cuando le agrego propiedades para darle la misma funcion que al otro no 
// funciona y las flechas del segundo actúan tambiún en el primero pero no en si mismo. Luego como veras
// cabe destacar que estare trabajndo en el despliegue del registro y el inicio de sesion, ya que para ver 
// la pestaña de registro o inicio de sesion tienes que dirijirte al style y quitarle el estilo a uno y agregarselo al otro
// estoy trabajando en como lograr desplegarlos con los botones en la parte superior de la page ya que estuve 
// sin poder lograrlo, si puedes darme algun consejo o una ayuda para poder solucionarlo me serviria, y el
// carrito todavia no lo empecé ya que estuve muy travado estas semanas en cuanto a entendimiento y demas. 













































