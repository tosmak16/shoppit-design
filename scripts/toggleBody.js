$(document).ready(function() {
  document
    .getElementById("nav-bar__button")
    .addEventListener("click", toogleBody);

  function toogleBody() {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }
});
