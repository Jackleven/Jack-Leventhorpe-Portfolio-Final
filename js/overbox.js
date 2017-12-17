"use strict";
jQuery(document).ready(function() {
	$("#contact_hide").hide();     
	setTimeout(function() { //after a delay the function will run
		$("#contact_hide").show();
		var objects = ["#bo", "#bo2", "#bo3", "#bo4"]; //populating array variables with HTML element IDs
		var details = ["#box1", "#box2", "#box3", "#box4", "#box5", "#box6"];
		var details_s = ["#sbox1", "#sbox2", "#sbox3", "#sbox4", "#sbox5", "#sbox6"];
		TweenMax.set(".con_heads", {  //animations of the given HTML element
			y: -12,
			color: "rgba(78, 0, 255, 0)"
		});
		TweenMax.set(".con_heads_bg", {
			y: -12,
			color: "rgba(78, 0, 255, 0)"
		});
		TweenMax.set(".fa", {
			color: "rgba(0, 0, 0, 0)"
		});
		var box = TweenMax.staggerTo(details_s, 2, { //animating each item in the array one by one
			left: "100%",
			width: "0%",
			delay: 2,
			ease: Sine.easeOut
		}, 0.2);
		TweenMax.staggerFromTo(details, 0.2, {
			x: -200,
			ease: Power0.easeNone
		}, {
			x: 0,
			ease: Circ.easeOut
		}, 0.2);
		TweenMax.staggerFromTo(details, 0.2, {
			opacity: 0
		}, {
			opacity: 100
		}, 0.2);
		TweenMax.pauseAll(); //calling function in correct order to create flow
		TweenMax.delayedCall(5, social) //delay call on social animations
		TweenMax.delayedCall(2.2, go) //delay call on go animations
		TweenMax.delayedCall(1.2, heads) //delay call on heads animations
		TweenMax.staggerTo(".purple_b_style", 5, {
			strokeDashoffset: 0,
			ease: Power0.easenone
		}, 0.3);

		function go() {
			TweenMax.resumeAll(); //resume all animations from where they were paused
		}

		function kill() { //function to stop all animations as they are
			TweenMax.killAll();
		}

		function heads() { //animating the headers on the contact page
			TweenMax.fromTo(".con_heads", 2, {
				y: -12,
				color: "rgba(78, 0, 255, 0)",
				ease: Power0.easeNone
			}, {
				y: 0,
				color: "#1c1f23",
				ease: Power2.easeOut,
				delay: 0.6
			});
			TweenMax.fromTo(".con_heads_bg", 2, {
				y: -12,
				color: "rgba(78, 0, 255, 0)",
				ease: Power0.easeNone
			}, {
				y: 0,
				color: "#1c1f23",
				ease: Power2.easeOut
			});
		}

		function social() { //animating the social media icons
			TweenMax.staggerFromTo(".fa", 2, {
				x: 400,
				color: "rgba(108, 0, 255, 0)",
				ease: Power0.easeNone
			}, {
				x: 0,
				color: "#A0A0A0",
				ease: Power2.easeOut
			}, 0.5);
		}
	}, 3000);
	var lets_head = document.getElementById("let_head"); //chaning the HTML element depending on resolution
	if ($(window).width() <= 500) {
		lets_head.innerHTML = "LET'S CHAT";
		console.log("working");
	} else {
		lets_head.innerHTML = "LET'S HAVE A CHAT";
	}
	$(window).resize(function() {
		if ($(window).width() <= 500) {
			lets_head.innerHTML = "LET'S CHAT";
			console.log("working");
		} else {
			lets_head.innerHTML = "LET'S HAVE A CHAT";
		}
	});
});