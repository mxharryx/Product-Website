// Add product cards

const productsContainer = document.querySelector('.products .container');

const productsData = [
    {name: 'Shoe 1', price: '$120.00', image: 'shoe1.jpg'},
    {name: 'Shoe 2', price: '$150.00', image: 'shoe1.jpg'},
    {name: 'Shoe 3', price: '$280.00', image: 'shoe1.jpg'},
];

//Fn to create a product card

function createProductCard(product) {
    const card=document.createElement('div');
    card.classList.add(product-card);

    const image = document.createElement('img');
    image.src = product.image;
    card.appendChild(image);

    const productName = document.createElement('h3');
    productName.textContent = product.name;
    card.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;
    card.appendChild(productPrice);

    return card;
}

productsData.forEach((product) => {
    const card = createProductCard(product);
    productsContainer.appendChild(card);
});