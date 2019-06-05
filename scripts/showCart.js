$(document).ready(function() {
  document
    .getElementById("your-cart-wrapper")
    .addEventListener("click", showCart);

  document
    .getElementById("close-cart-icon")
    .addEventListener("click", hideCart);

  var whitePoolCartWrapper = document.getElementById("white-pool-cart-wrapper");
  if (whitePoolCartWrapper !== null) {
    whitePoolCartWrapper.addEventListener("click", showCart);
  }

  var yourCartWrapper = document.getElementById("your-cart-wrapper-2");
  if (yourCartWrapper !== null) {
    yourCartWrapper.addEventListener("click", showCart);
  }

  function showCart() {
    var cartModal = document.getElementById("cart-modal");

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }

    cartModal.classList.add("cart-modal--visible");
  }

  function hideCart() {
    var cartModal = document.getElementById("cart-modal");

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    cartModal.classList.remove("cart-modal--visible");
  }
});
