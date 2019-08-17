// Sticky menu

(function($) {
let header = $('.menu-sticky');
let win = $(window);
win.on('scroll', function() {
   var scroll = win.scrollTop();
   if (scroll < 300) {
       header.removeClass("sticky");
   } else {
       header.addClass("sticky");
   }
});

})(jQuery);
