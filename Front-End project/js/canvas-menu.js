"use strict";

// Canvas Menu

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

let sidenavlist = $('.sidenav-list');
	if(sidenavlist.length){
		$( ".sidenav-list li.sidenav-list-menu" ).on('click', function() {
		  $(this).children( "ul" ).slideToggle( "slow", function() {
		  });
		});
	}