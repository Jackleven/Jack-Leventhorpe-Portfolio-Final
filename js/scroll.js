"use strict";
jQuery(document).ready(function() {
	var controller = new ScrollMagic.Controller(); //a controller is setup to control the scenes I create
	TweenMax.set("#q1", { //the objects are initially set up
		css: {
			rotationX: 0,
			color: "#A93CC4"
		},
		ease: Power3.easeOut
	});
	var qus1 = TweenMax.to("#q1", 5, {
		css: {
			rotationX: 90,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	TweenMax.set("#q2", {
		css: {
			rotationX: 0,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	var qus2 = TweenMax.to("#q2", 5, {
		css: {
			rotationX: 0,
			color: "#A93CC4"
		},
		ease: Power3.easeOut
	});
	var qus2_out = TweenMax.to("#q2", 5, {
		css: {
			rotationX: 90,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	TweenMax.set("#q3", {
		css: {
			rotationX: 90,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	var qus3 = TweenMax.to("#q3", 5, {
		css: {
			rotationX: 0,
			color: "#A93CC4"
		},
		ease: Power3.easeOut
	});
	var qus3_out = TweenMax.to("#q3", 5, {
		css: {
			rotationX: 90,
			color: "rgba(0, 0, 0, 0)"
		},
		ease: Power3.easeOut
	});
	TweenMax.set("#q4", {
		css: {
			rotationX: 90,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	var qus4 = TweenMax.to("#q4", 5, {
		css: {
			rotationX: 0,
			color: "#A93CC4"
		},
		ease: Power3.easeOut
	});
	TweenMax.set("#a1", {
		css: {
			transformOrigin: "center top"
		}
	});
	var ans_pic = TweenMax.to("#a1", 5, {
		css: {
			rotationX: 90,
			opacity: 0
		},
		ease: Power3.easeOut
	});
	TweenMax.set("#a2", {
		css: {
			rotationX: 0,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	var ans2 = TweenMax.to("#a2", 5, {
		css: {
			rotationX: 0,
			color: "rgb(0, 0, 0)"
		},
		ease: Power3.easeOut
	});
	var ans2_out = TweenMax.to("#a2", 5, {
		css: {
			rotationX: 90,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	TweenMax.set("#a3", {
		css: {
			rotationX: 90,
			color: "rgba(169, 60, 196, 0)"
		},
		ease: Power3.easeOut
	});
	var ans3 = TweenMax.to("#a3", 5, {
		css: {
			rotationX: 0,
			color: "rgb(0, 0, 0)"
		},
		ease: Power3.easeOut
	});
	var ans3_out = TweenMax.to("#a3", 5, {
		css: {
			rotationX: 90,
			color: "rgba(0, 0, 0, 0)"
		},
		ease: Power3.easeOut
	});
	TweenMax.set("#a4", {
		css: {
			rotationX: 90,
			color: "rgba(10, 10, 10, 0)"
		},
		ease: Power3.easeOut
	});
	var ans4 = TweenMax.to("#a4", 5, {
		css: {
			rotationX: 0,
			color: "rgb(0, 0, 0)"
		},
		ease: Power3.easeOut
	});
	var scene2 = new ScrollMagic.Scene({ //each scene has an active location or trigger point in which the animations I have defined above will play
        //the progress through each animation is defined by the progress of the scroll on the page
        //this gives the illiusion of a rolling scroll
		triggerElement: "#about_trigger",//assinging HTML element as the trigger point
		duration: 400, //the legnth of the animation with regards to scrolling eg 400 units scrolled and the animation is comeplete or 200 units scroll and the animation is 50% complete
		offset: 400, //offset from the trigger element initial starting point
	}).setTween(qus1).addTo(controller); //the scene being added to the controller
	var scene1 = new ScrollMagic.Scene({
		triggerElement: "#about_trigger",
		duration: 300,
		offset: 600,
	}).setTween(ans_pic).addTo(controller);
	var scene3 = new ScrollMagic.Scene({
		triggerElement: "#row2",
		duration: 600,
		offset: 200,
	}).setTween(qus2_out).addTo(controller);
	var scene4 = new ScrollMagic.Scene({
		triggerElement: "#row2",
		duration: 600,
		offset: 400,
	}).setTween(ans2_out).addTo(controller);
	var scene5 = new ScrollMagic.Scene({
		triggerElement: "#row2",
		duration: 600,
		offset: -350,
	}).setTween(qus2).addTo(controller);
	var scene6 = new ScrollMagic.Scene({
		triggerElement: "#row2",
		duration: 600,
		offset: -200,
	}).setTween(ans2).addTo(controller);
	var scene7 = new ScrollMagic.Scene({
		triggerElement: "#row3",
		duration: 600,
		offset: 200,
	}).setTween(qus3_out).addTo(controller);
	var scene8 = new ScrollMagic.Scene({
		triggerElement: "#row3",
		duration: 600,
		offset: 400,
	}).setTween(ans3_out).addTo(controller);
	var scene9 = new ScrollMagic.Scene({
		triggerElement: "#row3",
		duration: 600,
		offset: -400,
	}).setTween(qus3).addTo(controller);
	var scene10 = new ScrollMagic.Scene({
		triggerElement: "#row3",
		duration: 600,
		offset: -200,
	}).setTween(ans3).addTo(controller);
	var scene13 = new ScrollMagic.Scene({
		triggerElement: "#row4",
		duration: 400,
		offset: -400,
	}).setTween(qus4).addTo(controller);
	var scene14 = new ScrollMagic.Scene({
		triggerElement: "#row4",
		duration: 400,
		offset: -200,
	}).setTween(ans4).addTo(controller);
	var myWindow = $("#about_cont"); //this will create a custom scroll amount and scroll effect
    //giving the scroll and ease
	var scrollTime = 4;
	var scrollDistance = 400;
	myWindow.on("mousewheel DOMMouseScroll", function(event) { //check to see if user has scroll in the correct area. IE not on a menu item
		console.log("mouse event detected");
		event.preventDefault();
		var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3; //defining a variable to get mousewheel scroll amount and location
		var scrollTop = myWindow.scrollTop(); //defining variable for reference point of the top of the window
		var finalScroll = scrollTop - parseInt(delta * scrollDistance); //variable to set a final scroll to point
		console.log(scrollTop);
		TweenMax.to(myWindow, scrollTime, { //animating the scroll effect itself
			scrollTo: {
				y: finalScroll,
				autoKill: true
			},
			ease: Power3.easeOut,
			overwrite: 5
		});
	});
});