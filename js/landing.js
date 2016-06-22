
	//Function for making the "browse" button fade in
	function fade_button() {
		$(".browse-button").fadeIn(300);
	}
	
	//Function for letter scramble
	var letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"
	, "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1",
	"2","3","4","5","6","7","8","9",];
	
	var title = "LUMINOUS WAVES";
	
	//Returns a random letter from the array "letters"
	function random_letter() {
		var ran_char = Math.floor((Math.random() * letters.length));
		return letters[ran_char];
	}
	
	//Function that unscrambles a word, one letter at a time
	var count = 0;
	var new_title = "";
	var index = 0;
	function unscramble() {
		
		//End setInterval if the current index of the new word is >= the desired title
		if(title == new_title) {
			clearInterval(interval_scramble);
			fade_button(); //Also make the new button fade in
		}
		else {
	
			var letter = random_letter();
			$("#title").text(new_title + letter);
			count++;
			
			//Changes the character 6 times before changing to the desired character
			if(count > 6 || (title[index] == " ")) {
				count = 0;
				new_title += title[index];
				$("#title").text(new_title);
				index++;
			}
			
			
		}
	}
	var interval_scramble = setInterval(unscramble, 60);
	
	
$(document).ready(function(){	
	
	
	var backgrounds = ["media/background_h_1.jpg", "media/background_h_2.jpg", "media/background_h_3.jpg"];
	var background_index = 1; //Current index in the "backgrounds" array
	var active_child = 1; //Current child of .pan-image that is marked as active
	
	//Function that loads the next image and changes the current image of the background
	function background_move() {
		//Load the next image
		$(".pan-image.loading").css("background-image", "url(" + backgrounds[background_index] + ")");
			$(".pan-image.active").fadeOut(500, function(){
				$(".pan-image.loading").fadeIn(500);
				//Change the appropriate classes from loaded to active or vice versa
				$(".pan-image:nth-child("+active_child+")").removeClass("active");
				if(active_child == 1) {
					$(".pan-image:nth-child(2)").removeClass("loading");
					$(".pan-image:nth-child(2)").addClass("active");
					$(".pan-image:nth-child(1)").addClass("loading");
					active_child = 2;
				}
				else {
					$(".pan-image:nth-child(1)").removeClass("loading");
					$(".pan-image:nth-child(1)").addClass("active");
					$(".pan-image:nth-child(2)").addClass("loading");
					active_child = 1;
				}
			});
		background_index++;
		//Return the background array to its first position when we reach the end
		if(background_index >= backgrounds.length) {
			background_index = 0;
		}
	}
	//Only use the background_move function if the home wrapper is visible
	if($(".main-home-wrapper").is(":visible")) {
		var background_rotate = setInterval(background_move, 10000);
	}
	
	
	//If the "home" button is clicked, shift the page for the home
	$(".upper-links:nth-child(1)").click(function() {
		$(".upper-links").removeClass("active");
		$(this).addClass("active");
		$(".main-home-wrapper").css("display", "block");
		$(".main-about-wrapper").css("width", "0px");
	});
	//If the "about" button is clicked, shift in the page for the about
	$(".upper-links:nth-child(2)").click(function() {
		$(".upper-links").removeClass("active");
		$(this).addClass("active");
		$(".main-about-wrapper").css("width", "100%");
		$(".main-home-wrapper").fadeOut(1000);
	});
	
	
	

});