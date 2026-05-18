type Category = "electronics" | "clothing" | "books";

interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
}

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "electronics"
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 1200,
        category: "clothing"
    },
    {
        id: 3,
        name: "JavaScript Book",
        price: 700,
        category: "books"
    }
];

const container = document.getElementById("productContainer") as HTMLDivElement;

products.forEach((product) => {

    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>ID: ${product.id}</p>
        <p>Price: ₹${product.price}</p>
        <p>Category: ${product.category}</p>
    `;

    container.appendChild(div);

});