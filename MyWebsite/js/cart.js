
function addCartProducts() {
    var container = document.querySelector("table#cart");
    var total = 0;

    var cart = JSON.parse(localStorage.getItem("cart"));
    for (let product of cart) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        var divCartInfo = document.createElement("cart-info");
        divCartInfo.classList.add("cart-info");
        var img = document.createElement("img");
        img.setAttribute("src", `/img/${product.url}`);
        var div = document.createElement("div");
        var p = document.createElement("p");
        p.textContent = product.name;
        var span = document.createElement("span");
        span.textContent = `Price: $${product.price}`;

        var td2 = document.createElement("td");
        var input = document.createElement("input")
        input.setAttribute("type", "number");
        input.setAttribute("value", `${product.cnt}`);
        input.readOnly = true;

        var td3 = document.createElement("td");
        td3.textContent = `$${Number(product.price) * Number(product.cnt)}`;

        div.appendChild(p);
        div.appendChild(span);
        divCartInfo.appendChild(img);
        divCartInfo.appendChild(div);
        td1.appendChild(divCartInfo);

        td2.appendChild(input);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        container.appendChild(tr);
        total += Number(product.cnt) * Number(product.price);
    }

    var result = document.querySelector("#total-value");
    result.textContent = `$${total}`;
}


/*
<tr>
    <td>
        <div class="cart-info">
            <img src="/img/iphone.png" alt="">
            <div>
                <p>iPhone 13 Pro</p>
                <span>Price: $1000</span>
            </div>
        </div>
    </td>
    <td>    
        <input type="number" value="1" min="1">
    </td>
    <td>$1000</td>
</tr>
*/

addCartProducts();