// Array para almacenar los productos del carrito
let cart = [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    const cartCount = document.querySelector('.cart-count');

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} x${item.quantity}</span>
                <span>${item.price * item.quantity}€</span>
            </div>
        `;
    });

    totalPrice.textContent = `${total}€`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Función para mostrar mensaje de compra
document.querySelector('.checkout-btn').addEventListener('click', () => {
    alert("Gracias por su compra. Estamos procesando su pedido.");
    cart = [];
    updateCart();
});
