"use-strict";
// Modal Search


let modal = document.getElementById('modal');

$(".search-icon").click(function() {
    $("#modal").attr("style", "display:block");

})


$(document).on("click", "#close-modal", function() {
    $("#modal").attr("style", "display:none");
})