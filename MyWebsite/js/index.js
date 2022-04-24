
const menuBar = document.querySelector(".menu-bar");
const navList = document.querySelector(".nav-list");

if (menuBar) {
    menuBar.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

let navbar = document.getElementById("nav-bar");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

function getCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  var total = 0;
  for (let product of cart) {
    total += Number(product.cnt);
  }
  return total;
}

function updateCartItemsNumber() {
  var container = document.querySelector("#cart-items");
  container.textContent = getCartCount();
  container = document.querySelector("#cart-items-m");
  container.textContent = getCartCount();
}

updateCartItemsNumber();