// .merged

$(document).ready(function() {
  // .firefox
  var isFF = true;
  var addRule = (function(style) {
    var sheet = document.head.appendChild(style).sheet;
    return function(selector, css) {
      if (isFF) {
        if (sheet.cssRules.length > 0) {
          sheet.deleteRule(0);
        }

        try {
          sheet.insertRule(selector + "{" + css + "}", 0);
        } catch (ex) {
          isFF = false;
        }
      }
    };
  })(document.createElement("style"));

  addRule(".all input::-moz-range-track", "background: #f7f7f7");

  $(".all input").trigger("input");

  // .merged
  if ("webkitRequestAnimationFrame" in window) {
    $(".merged input").addClass("webkit-track");
  }

  $(".merged input").on("input", function() {
    addRule(".merged input::-moz-range-track", "background: #f7f7f7");

    if ($(this).hasClass("webkit-track")) {
      $(this).css(
        "background",
        "linear-gradient(to right, #f7f7f7 " +
          this.value +
          "%, #f62f5e " +
          this.value +
          "%)"
      );

      if (this.id === "right-pan") {
        $("#max-price").html("£" + (100 - this.value / 2));
      } else {
        $("#min-price").html("£" + (100 - (100 - this.value / 2)));
      }
    }
  });

  $(".merged input").trigger("input");
});
