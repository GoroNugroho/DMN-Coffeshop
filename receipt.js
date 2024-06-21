document.addEventListener('DOMContentLoaded', function () {
    const receiptList = document.getElementById('receipt-list');
    const totalPriceDiv = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let total = 0;
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp ${item.price.toLocaleString('id-ID')}`;
        receiptList.appendChild(listItem);
        total += item.price;
    });

    totalPriceDiv.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
});
