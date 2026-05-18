const products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Phone",
        price: 20000
    },
    {
        name: "Book",
        price: 500
    }
];

const cart = [];

const productContainer = document.getElementById("products");
const count = document.getElementById("count");
const totalBtn = document.getElementById("totalBtn");

products.forEach(function (product) {

    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button>Add to Cart</button>
    `;

    const button = div.querySelector("button");

    button.addEventListener("click", function () {

        cart.push(product);

        count.textContent = cart.length;

    });

    productContainer.appendChild(div);

});


totalBtn.addEventListener("click", function () {

    let total = 0;

    cart.forEach(function (item) {
        total += item.price;
    });

    alert("Total Price = ₹" + total);

});