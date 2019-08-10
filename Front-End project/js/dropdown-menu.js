$(document).ready(function(){
    
    $(".m-menu-icon").click(function(){
        let menu = $(".main-menu .menu");
        let h = $(".main-menu .menu .menu-items").height();

        if(menu.height() > 0){
            menu.height(0);
        } else {
            menu.height(h);
        } 
    });
});