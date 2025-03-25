document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".toggle-button");
  var buttons2 = document.querySelectorAll(".toggle-button2");
  var modal = document.querySelector("#modal");
  var modal2 = document.querySelector("#modal2");

  [].forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
      modal.classList.toggle("off");
    });
  });

  [].forEach.call(buttons2, function (button2) {
    button2.addEventListener("click", function () {
      modal2.classList.toggle("off");
    });
  });

});