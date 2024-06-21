let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(itemName + " has been added to your cart.");
    localStorage.setItem('cart', JSON.stringify(cart));
}

function goToReceipt() {
    window.location.href = 'receipt.html';
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} - Rp ${item.price.toLocaleString('id-ID')}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    totalPriceContainer.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});
