$(document).ready(function(){
	
	
	
	var menushown = false;
	
	$(".menu-button").click(function(){
		if(!menushown) {
			$(".screen-cover").fadeIn("800");
			$(".menu").animate({
				top: '+=700px'
			}, 1500);
		}
		$(".random-video").fadeOut("400");
		$(".menu-button").fadeOut("900");
		menushown = true;
	});
	
	$(".close-button").click(function(){
		$(".screen-cover").fadeOut("800");
		$(".menu").animate({
			top: '-=700px'
		}, 1000);
		$(".menu-button").fadeIn("900");
		menushown = false;
	});
	
	
	$(".playvideo").click(function() {
		$(".screen-cover").fadeIn("800");
		$(".menu").animate({
			top: '-=700px'
		}, 1000);
		menushown = false;
		$(".menu-button").fadeIn("900");
		$(".random-video").fadeIn("1000");
	});
	$(".close-video").click(function() {
		$(".screen-cover").fadeOut("800");
		$(".random-video").fadeOut("400");
	});
	
	
	var onlymusic = false;
	$(".justmusic").click(function() {
		if(onlymusic) {
			$(".quote-container").fadeIn("800");
			$(".slide-controls-container").fadeIn("500");
			onlymusic = false;
		}
		else {
			$(".quote-container").fadeOut("800");
			$(".slide-controls-container").fadeOut("500");
			onlymusic = true;
		}
		$(".menu").animate({
			top: '-=700px'
		}, 1000);
		menushown = false;
		$(".menu-button").fadeIn("900");
		$(".justmusic").addClass("pause");
		$(".screen-cover").fadeOut("800");
	});
	
	
	
	
	var songnum = 0;
	var songlist = [".background-music:nth-child(1)"];
	var audio = $(songlist[0])[0];
	audio.play();
	
	var pause = false;
	$(".musictoggle").click(function() {
		if(pause) {
			$(".musictoggle").removeClass("pause");
			audio.play();
			pause = false;
		}
		else {
			audio.pause();
			$(".musictoggle").addClass("pause");
			pause = true;
		}
	});
	
	
	
	
	
	
	var quotenum = 0;
	var quoteclass = [".quote:nth-child(1)",".quote:nth-child(2)", ".quote:nth-child(3)"
	,".quote:nth-child(4)",".quote:nth-child(5)",".quote:nth-child(6)",".quote:nth-child(7)"]
	var picturenum = 0;
	var pictures = [".main-picture:nth-child(1)",".main-picture:nth-child(2)",".main-picture:nth-child(3)" ]
	
	$(quoteclass[0]).show();
	$(".next").click(function() {
		
		$(quoteclass[quotenum]).hide();
		$(pictures[picturenum]).fadeTo("slow", 0);
		$(pictures[picturenum]).removeClass("show");
		
		quotenum += 1;
		picturenum += 1;
		if(quotenum == 7) {
			quotenum = 0;
		}
		if(picturenum == 3) {
			picturenum = 0;
		}
		
		$(pictures[picturenum]).addClass("show");
		$(pictures[picturenum]).fadeTo("slow", 1);
		$(quoteclass[quotenum]).fadeIn("700");
	});
	$(".previous").click(function() {
		$(quoteclass[quotenum]).hide();
		$(pictures[picturenum]).fadeTo("slow", 0);
		$(pictures[picturenum]).removeClass("show");
		
		quotenum -= 1;
		picturenum -= 1;
		if(quotenum == -1) {
			quotenum = 6;
		}
		if(picturenum == -1) {
			picturenum = 2;
		}
		
		$(pictures[picturenum]).addClass("show");
		$(pictures[picturenum]).fadeTo("slow", 1);
		$(quoteclass[quotenum]).fadeIn("700");
	});

});