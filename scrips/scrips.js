// Carrusel automático para los productos destacados
let currentProductIndex = 0;

function showProductSlide(index) {
    const slides = document.querySelectorAll('.product-card');
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if (i === index) {
            slide.style.display = 'block';
            slide.classList.add('fade-in'); // Añadir una clase para la animación
        }
    });
}

// Función para mover el carrusel al siguiente producto
function nextProductSlide() {
    const slides = document.querySelectorAll('.product-card');
    currentProductIndex = (currentProductIndex + 1) % slides.length;
    showProductSlide(currentProductIndex);
}

// Configuración para que el carrusel se mueva cada 5 segundos
setInterval(nextProductSlide, 5000);

// Iniciar el carrusel en el primer producto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showProductSlide(currentProductIndex);
});

// Animación de entrada en el Hero
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('slide-in');
});

// Interactividad en los botones de login y registro
document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Funcionalidad de inicio de sesión en construcción.');
});

document.querySelector('.register-btn').addEventListener('click', () => {
    alert('Funcionalidad de registro en construcción.');
});
