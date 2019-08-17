// Section Acheivements

  $(function(){
    $(window).scroll(function(){
      var aTop = 1900;
      if($(this).scrollTop()>=aTop){
          

        $('.counter-number').each(function() {
          let $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
        
          {
        
            duration: 1000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
        
          });  
        
        });
      }
    });
  });