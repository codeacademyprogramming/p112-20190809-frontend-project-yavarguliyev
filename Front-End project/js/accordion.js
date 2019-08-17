// Accordion

let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      $(this).siblings(".active").removeClass("active")
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
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