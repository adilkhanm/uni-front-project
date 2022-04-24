
function getProduct() {
    return JSON.parse(localStorage.getItem("product"));
}

function getValue() {
    var cntInput = document.querySelector("input");
    return cntInput.value;
}

function addProductDetails(product) {
    const container = document.querySelector("#product-details-container");

    var divLeft = document.createElement("div");
    divLeft.classList.add("left", "image-container");
    var divImg = document.createElement("div");
    divImg.classList.add("main");
    var img = document.createElement("img");
    img.setAttribute("src", `/img/${product.url}`);

    var divRight = document.createElement("div");
    divRight.classList.add("right");
    var span = document.createElement("span");
    span.textContent = product.category;
    var h1 = document.createElement("h1");
    h1.textContent = product.name;
    var divPrice = document.createElement("div");
    divPrice.classList.add("price");
    divPrice.textContent = `$${product.price}`;
    var form = document.createElement("form");
    form.classList.add("form");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "1");
    var linkToCart = document.createElement("a");
    linkToCart.setAttribute("href", "shop.html");

    // linkToCart.setAttribute("href", "#");

    linkToCart.classList.add("addCart");
    linkToCart.textContent = "Add To Cart";
    var h3 = document.createElement("h3");
    h3.textContent = "Product Details";
    var parag = document.createElement("p");
    parag.textContent = product.details;

    divImg.appendChild(img);
    divLeft.appendChild(divImg);
    container.appendChild(divLeft);

    divRight.appendChild(span);
    divRight.appendChild(h1);
    divRight.appendChild(divPrice);
    form.appendChild(input);
    form.appendChild(linkToCart);
    divRight.appendChild(form);
    divRight.appendChild(h3);
    divRight.appendChild(parag);

    linkToCart.addEventListener("click", () => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }

        var added = false;
        var cart = JSON.parse(localStorage.getItem("cart"));
        product.cnt = Number(getValue());

        for (var prod of cart) {
            if (prod._id == product._id) {
                prod.cnt = Number(prod.cnt) + Number(product.cnt);
                added = true;
                break;
            }
        }
        if (!added) {
            cart.push(product);
        }
        
        console.log(cart);

        localStorage.setItem("cart", JSON.stringify(cart));
    });

    container.appendChild(divRight);
}

/*
<div class="left image-container">
    <div class="main">
        <img src="/img/apple-watch.png" alt="">
    </div>
</div>
<div class="right">
    <span>Watches/Apple Watch</span>
    <h1>Apple Watch series 6</h1>
    <div class="price">$600</div>
    <form class="form">
        <input type="number" placeholder="1" value="1">
        <a href="cart.html" class="addCart">Add To Cart</a>
    </form>
    <h3>Product Details</h3>
    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
</div>
*/

product = getProduct();
addProductDetails(product);