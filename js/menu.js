"use strict";
jQuery(document).ready(function() {
    
	var current_title = $(document).attr('title');
	setTimeout(function() {
		var menu_left = document.getElementById("menu_left_bg");   // assigning html elements to variables
		var menu_right = document.getElementById("menu_right_bg");
		var menu_bot = document.getElementById("menu_bot_bg");
		$("#menu_right_text").mouseenter(function() {     //checking hover functions for menu items onEnter and OnExit. This will start the animations
			TweenMax.to("#right_p1", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			TweenMax.to("#right_p2", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			draw_right(); //calling function to start drawing right animation
			TweenMax.to(".right_draw", 0.8, { 
				strokeDashoffset: 0,//drawing animations are conrolled by the value of StrokerDashOffSet of the SVGs taking this value from 1000 to 0 creates the illusion of it drawing itself
				ease: Power1.easeOut //appyling an ease effect the animation. Making it feel more natural and have more weight to it
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni); //delayed call to stop the animation and reverse it back to center

			function stopAni() {
				TweenMax.to("#right_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.to("#right_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.fromTo(".right_draw", 2, {
					strokeDashoffset: 0,
					ease: Power2.easeOut
				}, {
					strokeDashoffset: 1000,
					ease: Power2.easeOut,
					delay: 1.8
				});
			}
		});
		$("#menu_left_text").mouseenter(function() {  //checking hover functions for menu items onEnter and OnExit. This will start the animations
			TweenMax.to("#left_p1", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			TweenMax.to("#left_p2", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			draw_left(); //calling function to start drawing left animation
			TweenMax.to(".left_draw", 0.8, {
				strokeDashoffset: 0,
				ease: Power1.easeOut
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni); //delayed call to stop the animation and reverse it back to center

			function stopAni() {
				TweenMax.to("#left_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.to("#left_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.fromTo(".left_draw", 2, {
					strokeDashoffset: 0,
					ease: Power2.easeOut
				}, {
					strokeDashoffset: 1000,
					ease: Power2.easeOut,
					delay: 1.8
				});
			}
		});
		$("#menu_left_text").mouseenter(function() {
			TweenMax.to("#left_p1", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			TweenMax.to("#left_p2", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			draw_left();
			TweenMax.to(".left_draw", 0.8, {
				strokeDashoffset: 0,
				ease: Power1.easeOut
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to("#left_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.to("#left_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.fromTo(".left_draw", 2, {
					strokeDashoffset: 0,
					ease: Power2.easeOut
				}, {
					strokeDashoffset: 1000,
					ease: Power2.easeOut,
					delay: 1.8
				});
			}
		});
        
		//creating paths------------------------------------------------------>
		var path_l = document.getElementById("left_draw"); //varibles to use in drawing SVGs
		var path_r = document.getElementById("right_draw");

		function draw_left() {  //function used to determine the path the the SVG will animate along
			var string = create_string();
			path_l.setAttribute("d", string);

			function create_string() { //function used to randomly generate path coordinates
				var myStr = "M";
				var num = [];
				for (var i = 0; i < 4; i++) {
					num[i] = getNumbers();
				}
				myStr += "99 75" + ",L" + num[1] + ",L" + num[2] + ",L" + num[3] + ",L" + "1 0"; //assigning MyStr variable the correct HTML syntax with array variables
				return (myStr);
			}
		}

		function draw_right() {
			var string = create_string();
			path_r.setAttribute("d", string);

			function create_string() {
				var myStr = "M";
				var num = [];
				for (var i = 0; i < 4; i++) {
					num[i] = getNumbers();
				}
				myStr += "1 75" + ",L" + num[1] + ",L" + num[2] + ",L" + num[3] + ",L" + "99 0";
				return (myStr);
			}
		}

		function getNumbers() {  //function to assign numbers to the my Str variable
			var myStr = "";
			for (var i = 0; i < 2; i++) {
				var num = getRandomNum(35, 55);
				myStr += num.toString() + " ";
			}

			function getRandomNum(min, max) {     //funtion to randomly generate numbers
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			return (myStr);
		}
		$("#resp_about_hov").mouseenter(function() { // responsive menu animations and funtions work exactly like mentioned above
			TweenMax.to(".menu_r_c", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_l", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.1
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.9, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_c", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone,
					delay: 0.1
				});
				TweenMax.to(".menu_r_l", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#resp_contact_hov").mouseenter(function() { 
			TweenMax.to(".menu_r_c", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_r", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.1
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.9, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_c", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone,
					delay: 0.1
				});
				TweenMax.to(".menu_r_r", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#resp_about_hov").mouseenter(function() {
			TweenMax.to(".menu_r_t", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_t", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_t", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
				TweenMax.to(".menu_r_t", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#resp_contact_hov").mouseenter(function() {
			TweenMax.to(".menu_r_b", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_b", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_b", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
				TweenMax.to(".menu_r_b", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#menu_bot_bg").mouseenter(function() {
			TweenMax.to("#bot_p1", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to("#bot_p2", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.9, stopAni);

			function stopAni() {
				TweenMax.to("#bot_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
				TweenMax.to("#bot_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
	}, 1500);
	var mast_array = [];  //start of letter dynamic roll animation
	var str_array1 = [];
	var str_array2 = [];
	var str_array3 = [];
	var str_array4 = [];
	var object_array = [];
	letter_roll(); //calling letter roll functions
	animate_letters();
	var count_bg = 1;
	var count_sm = 0;
	$(window).resize(function() { //check to see if window has been resized. Menu would move so it animates again
		if (($(window).width() > 1024) && (count_bg == 0)) {
			letter_roll();
			animate_letters();
			count_sm = 0;
			count_bg = 1;
		} else {
			if (($(window).width() < 1024) && (count_sm == 0)) {
				letter_roll();
				animate_letters();
				count_sm = 1;
				count_bg = 0;
			}
		}
	});

	function letter_roll() {   //function to create letter roll data to use in animations
		var str1 = "CONTACT_ME";
		var str2 = "ABOUT_ME";
		var str3 = "PORTFOLIO";
		var str4 = "HOME";
		str_array1 = str1.split(""); //splitting up variables into sinlge letter to animate individually
		str_array2 = str2.split("");
		str_array3 = str3.split("");
		str_array4 = str4.split("");
		mast_array.push(str_array1, str_array2, str_array3, str_array4); //populating array with variables in specidifc order

		function create_html() { //using arrays to create and change the HTML on page
			for (var p = 0; p < mast_array.length; p++) { //loop to declare and assign a 2 dimentional array with correct variables
				var myArray = [];
				myArray = mast_array[p];
				var myStrCon = "";
				for (var i = 0; i < myArray.length; i++) { //nested loop to populate array with correct HTML strings
					myStrCon += "<div class='letter'><span>" + myArray[i] + "</span></div>" + " ";
				}
				object_array.push(myStrCon);
			}
			switch (current_title) { //check which page the user is on to display correct menu item names
				case ("Home"):
					home();
					break;
				case ("About me"):
					about();
					break;
				case ("Contact me"):
					contact();
					break;
				case ("Portfolio"):
					port();
					break;
			}

			function home() { //function to create menu item names using the created arrays
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_about_resp").innerHTML = object_array[1];      //changing the HTML code to display the given name created in the above functions
					document.getElementById("text_here_contact_resp").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
				} else {
					document.getElementById("text_here_about").innerHTML = object_array[1];
					document.getElementById("text_here_contact").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
				}
				$("#resp_contact_hov").click(function() {  //checking to see which menu item the user clicks on 
                    //depending on where the click is the page will be changed to the respective page
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}

			function about() { //acts in the same way as the home() function
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_contact_resp").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home_resp").innerHTML = object_array[3];
				} else {
					document.getElementById("text_here_contact").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				}
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_contact_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}

			function contact() { //acts in the same way as the home() function
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_about_resp").innerHTML = object_array[1];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home_resp").innerHTML = object_array[3];
				} else {
					document.getElementById("text_here_about").innerHTML = object_array[1];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				}
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_contact_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}

			function port() {    //acts in the same way as the home() function
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_about_resp").innerHTML = object_array[1];
					document.getElementById("text_here_contact_resp").innerHTML = object_array[0];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				} else {
					document.getElementById("text_here_about").innerHTML = object_array[0];
					document.getElementById("text_here_contact").innerHTML = object_array[1];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				}
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_contact_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}
		}
		create_html(); //function called to create the HTML
	}

	function animate_letters() { //the given menu items are animated letter by letter by going through the array and aniamting each item in the same way giving the effect of the rolling out
		TweenMax.set(".letter", {
			css: {
				rotationY: 90,
				color: "rgba(0, 255, 20, 0.08)"
			},
			ease: Power3.easeOut
		});
		TweenMax.staggerTo(".letter", 0.5, {
			css: {
				rotationY: 0,
				color: "#4b4f50"
			},
			ease: Power3.easeOut
		}, 0.15);
	}
});