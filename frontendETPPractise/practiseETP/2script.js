const button = document.getElementById("fetchBtn");
const loading = document.getElementById("loading");
const productContainer = document.getElementById("products");

button.addEventListener("click", function () {

    loading.textContent = "Loading products...";
    productContainer.innerHTML = "";

    setTimeout(function () {

        const products = [
            {
                name: "Laptop",
                price: 50000,
                category: "Electronics"
            },
            {
                name: "T-Shirt",
                price: 1000,
                category: "Clothing"
            },
            {
                name: "Book",
                price: 500,
                category: "Education"
            }
        ];

        loading.textContent = "";

        products.forEach(function (product) {

            const div = document.createElement("div");

            div.classList.add("product");

            div.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
            `;

            productContainer.appendChild(div);

        });

    }, 2000);

});