const produceItems = [
    { id: 1, name: "Organic Apples", category: "Fruits", price: 3.99, description: "Fresh organic apples.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Carrots", category: "Vegetables", price: 2.49, description: "Crunchy farm carrots.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Fresh Milk", category: "Dairy", price: 4.99, description: "Pure fresh milk.", image: "https://via.placeholder.com/150" }
];

const produceList = document.getElementById("produce-list");
const cartItems = document.getElementById("cart-items");
const cart = [];

function renderProduce() {
    produceItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>${item.description}</p>
            <p><strong>$${item.price.toFixed(2)}</strong></p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        produceList.appendChild(card);
    });
}

function addToCart(id) {
    const item = produceItems.find(p => p.id === id);
    cart.push(item);
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}

renderProduce();