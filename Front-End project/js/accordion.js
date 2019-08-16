// Accordion

let acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      $(this).siblings(".active").removeClass("active")
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        $(".accordion").each(function (ind, val) {
          val.nextElementSibling.style.maxHeight = null;
        })
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }