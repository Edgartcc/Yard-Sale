const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

/*lo que esta comentado es una manera de hacerlo, lo que esta sin comentar es una manera mas sencilla*/  

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive');

    
}

function openProductDetailAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

/*function toggleDesktopMenu() {
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive')
     
    if (isshoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
        
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive')
     

    if (isshoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
        
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive') 

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
        
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
        
    }
    
    shoppingCartContainer.classList.toggle('inactive');

    
}*/

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 250,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Xbox',
    price: 450,
    image: 'https://images.pexels.com/photos/139038/pexels-photo-139038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Guitar',
    price: 950,
    image: 'https://images.pexels.com/photos/8044221/pexels-photo-8044221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'pc',
    price: 1200,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'SmartPhone',
    price: 1200,
    image: 'https://images.pexels.com/photos/1024864/pexels-photo-1024864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Taximoto',
    price: 2000,
    image: 'https://images.pexels.com/photos/13156173/pexels-photo-13156173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'CardSale',
    price: 2000,
    image: 'https://images.pexels.com/photos/5614119/pexels-photo-5614119.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Zapatos de Davinci',
    price: 2500,
    image: 'https://images.pexels.com/photos/5264896/pexels-photo-5264896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Ropa de primera',
    price: 50,
    image: 'https://images.pexels.com/photos/6347535/pexels-photo-6347535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Billetera llena',
    price: 5,
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Silla minimalista',
    price: 50,
    image: 'https://images.pexels.com/photos/5486148/pexels-photo-5486148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});



/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
        <p>$120,00</p>
        <p>Bike</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);