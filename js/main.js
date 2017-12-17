"use strict";
jQuery(document).ready(function() {
    
	console.log("ready!");
    
	TweenMax.delayedCall(3, my_pros); // a delayed call for the function my_pros
    
    
    function my_pros(){
        
        
        TweenMax.fromTo("#show_head", 2, { //animating headings
		y: 208,
		color: "rgba(169, 60, 196, 0)",
		ease: Power0.easeNone
	}, {
		y: 250,
		color: "#1c1f23",
		ease: Power2.easeOut
	});
    
	var show_header = document.getElementById("show_head");
    
	if ($(window).width() <= 768) {                //change heading depending on resolution
		show_header.innerHTML = "MY PROJECTS";
	} else {
		show_header.innerHTML = "CHECK OUT MY PROJECTS";
	}
	$(window).resize(function() {
		if ($(window).width() <= 768) {           //change heading depending on resolution
			show_header.innerHTML = "MY PROJECTS";
			console.log("PORT working");
		} else {
			show_header.innerHTML = "CHECK OUT MY PROJECTS";
		}
	});
        
        
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     TweenMax.delayedCall(4.5, start_cont);
    TweenMax.delayedCall(6, images);
    
    
    
    function start_cont(){
        
        
        TweenMax.to("#show_head", 0.5, {
		
		color: "rgba(196, 0, 255, 0)",
		ease: Power0.easeNone
	});
        
        
         TweenMax.fromTo(".port_content_text", 2.5, {
		y: -12,
		color: "rgba(169, 60, 196, 0)",
		ease: Power0.easeNone
	}, {
		y: 0,
		color: "#1c1f23",
		ease: Power2.easeOut
	});
        
    
        
    }
    
    
    
    
      function images(){
        
     
        
            TweenMax.fromTo(".port_content_pic", 2, {
		x: -22,
		opacity: "0",
		ease: Power0.easeNone
	}, {
		x: 0,
		opacity: "1.0",
		ease: Power2.easeOut
	});
        
        
    }
   
    
    
    
    
    
   
    
    
    
    
});