// Add product cards

const productsContainer = document.querySelector('.products .container');

const productsData = [
    {
        title: "Zippety Zap",
        price: "$419.99",
        image: "assets/shoe1.png"
    },
    {
        title: "Zuppety Zip",
        price: "$599.99",
        image: "assets/shoe2.png"
    },
    {
        title: "Zappety Zup",
        price: "$899.99",
        image: "assets/shoe3.png"
    },
    // Add more products here as needed
];

const productCardsContainer = document.getElementById("productCards");

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = product.image;
    image.alt = product.title;
    card.appendChild(image);

    const title = document.createElement("h3");
    title.classList.add("product-title");
    title.textContent = product.title;
    card.appendChild(title);

    const price = document.createElement("p");
    price.classList.add("product-price");
    price.textContent = product.price;
    card.appendChild(price);

    return card;
}

// Generate product cards and append to the container
productsData.forEach(product => {
    const productCard = createProductCard(product);
    productCardsContainer.appendChild(productCard);
});

const rotatingImages =[
    "assets/shoe1.png",
    "assets/shoe2.png",
    "assets/shoe3.png",
    "assets/shoe4.png",
];

let currentImageIndex = 0;
const rotatingImage = document.getElementById("rotatingImage");

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % rotatingImages.length;
    rotatingImage.src = rotatingImages[currentImageIndex];
}
// Change image every 5 seconds
setInterval(changeImage, 5000);



