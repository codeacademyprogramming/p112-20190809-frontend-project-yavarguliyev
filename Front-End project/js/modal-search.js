"use-strict";
// Modal Search

let modal = document.getElementById('modal');

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

$(".search-icon").click(function() {
    $("#modal").attr("style", "display:block");

})


$(document).on("click", "#close-modal", function() {
    $("#modal").attr("style", "display:none");
})