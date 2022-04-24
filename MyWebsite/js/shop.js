
const products = [
    // Watches
    new Product("Apple Watch series 6", 279, "watch", "apple-watch-6.png", "This is super watch"),
    // Laptops
    new Product("MacBook Pro 13'", 1299, "laptop", "macbook13-20.png", "The powerful mac for working"),
    // Phones
    new Product("iPhone 12", 849, "phone", "iphone12.png", "best experience with iphone"),
    new Product("iPhone 13", 989, "phone", "iphone12.png", "best experience with iphone"),
    new Product("iPhone XS", 759, "phone", "iphone12.png", "best experience with iphone")
]

function addProducts() {
    const container = document.querySelector("#products-container");

    for (let product of products) {
        var divProductItem = document.createElement("div");
        divProductItem.classList.add("product-item");
        divProductItem.setAttribute('id', `${product._id}`);
        var divOverlay = document.createElement("div");
        divOverlay.classList.add("overlay");
        var linkProduct = document.createElement("a");
        linkProduct.setAttribute('href', "productDetails.html");
        linkProduct.classList.add("product");
        var img = document.createElement("img");
        img.setAttribute('src', `/img/${product.url}`);
    
        var divProductInfo = document.createElement("div");
        divProductInfo.classList.add("product-info");
        var span = document.createElement("span");
        span.textContent = product.category;
        var linkProductDetails = document.createElement("a");
        linkProductDetails.setAttribute('href', "#");
        linkProductDetails.textContent += product.name;
        var header4 = document.createElement("h4");
        header4.textContent += `$${product.price}`;
    
        var ulist = document.createElement("ul");
        ulist.classList.add("icons");
        var list = document.createElement("li");
        var linkTo = document.createElement("a");
        linkTo.setAttribute('href', "productDetails.html")
        icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-basket-shopping");

        linkProduct.appendChild(img);
        divOverlay.appendChild(linkProduct);
        divProductInfo.appendChild(span);
        divProductInfo.appendChild(linkProductDetails);
        divProductInfo.appendChild(header4);
        linkTo.appendChild(icon);
        list.appendChild(linkTo);
        ulist.appendChild(list);
        divProductItem.appendChild(divOverlay);
        divProductItem.appendChild(divProductInfo);
        divProductItem.appendChild(ulist);

        linkTo.addEventListener("click", () => {
            localStorage.setItem("product", JSON.stringify(product));
            // localStorage.setItem("product_name", product.name);
            // localStorage.setItem("product_price", product.price);
            // localStorage.setItem("product_category", product.category);
            // localStorage.setItem("product_url", product.url);
            // localStorage.setItem("product_details", product.details);
            // localStorage.setItem("product_id", product._id);
        });
    
        container.appendChild(divProductItem);
    }
}
/* 
<div class="product-item">
    <div class="overlay">
        <a href="productDetails.html" class="product">
            <img src="/img/apple-watch.png" alt="">
        </a>
    </div>
    <div class="product-info">
        <span>Watches</span>
        <a href="productDetails.html">
            Apple Watch series 6
        </a>
        <h4>$600</h4>
    </div>

    <ul class="icons">
        <li><a href="productDetails.html"><i class="fa-solid fa-basket-shopping"></i></a></li>
    </ul>
</div> 
*/

addProducts();