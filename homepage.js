$(document).ready(function(){
	
	
	$("body").removeClass("remove-overflow");
	$(".hello").delay("2000").fadeIn("300");
	$(".feeling").delay("3000").fadeIn("300");
	$(".center-descriptor").delay("4000").fadeIn("300");
	$(".boxtext:nth-child(1)").delay("5000").fadeIn("300");
	$(".boxtext:nth-child(1)").fadeOut("300");
	$(".boxtext:nth-child(2)").delay("6000").fadeIn("300");
	$(".boxtext:nth-child(2)").fadeOut("300");
	$(".boxtext:nth-child(3)").delay("7000").fadeIn("300");
	$(".boxtext:nth-child(3)").fadeOut("300");
	$(".boxtext:nth-child(4)").delay("8000").fadeIn("300");
	$(".boxtext:nth-child(4)").fadeOut("300");
	$(".boxtext:nth-child(5)").delay("9000").fadeIn("300");
	$(".boxtext:nth-child(5)").fadeOut("300");
	$(".intro-cover").delay("10000").fadeOut("1000");
	
	$(document).keydown(function(e) {
		if(e.keyCode == 83) {
			$(".intro-cover").hide();
			$(".boxtext").clearQueue();
			$(".feeling").hide();
			$(".hello").hide();
			$(".center-descriptor").show();
		}
		
	});
		
	var audio = $("#background-music")[0];
	var clicks = 1;
	var time = 0;
	audio.play();
	$("#music-toggle").click(function() {
		if(clicks == 0) {
			audio.currentTime = time;
			audio.play();
			clicks = 1;
			$(".fa.fa-play").removeClass("fa-play");
			$(".fa").addClass("fa-pause");
		}
		else {
			audio.pause();
			time = audio.currentTime;
			clicks = 0;
			$(".fa.fa-pause").removeClass("fa-pause");
			$(".fa").addClass("fa-play");
		}
	});
	
	$(".top-links:nth-child(1)").click(function(){
		$(".center-descriptor").clearQueue();
		$(".center-descriptor").hide();
		$(".center-purpose").fadeIn("1500");
		$(".center-videos").hide();
		$("body").removeClass("remove-overflow");
	});
	$(".top-links:nth-child(2)").click(function(){
		$(".center-descriptor").fadeIn("1500");
		$(".center-purpose").hide();
		$(".center-videos").hide();
		$("body").removeClass("remove-overflow");
	});
	$(".top-links:nth-child(3)").click(function(){
		$(".center-descriptor").clearQueue();
		$(".center-descriptor").hide();
		$(".center-purpose").hide();
		$(".center-videos").fadeIn("1500");
		$("body").addClass("remove-overflow");
	});
	
	
	/*Blank box interaction*/
	$("#blank-box").click(function() {
		$(".list-container").toggleClass("showlist");
		$(".boxtext").hide();
		//$(".boxtext").removeClass("showtext");
		$(".go-to-container").hide();
	});
	$(".part1").click(function() {
		//$(".boxtext").removeClass("showtext");
		$(".boxtext").hide();
		$(".list-container").toggleClass("showlist");
		$(".go-to-container").addClass("showlink");
		$(".go-to-container.showlink").fadeIn("slow");
		$(".boxtext:nth-child(1)").fadeIn("slow");
		//$(".boxtext:nth-child(1)").addClass("showtext");
		$(".descriptor-link").removeClass("showlink");
		$(".descriptor-link:nth-child(1)").addClass("showlink");
	});
	$(".part2").click(function() {
		//$(".boxtext").removeClass("showtext");
		$(".boxtext").hide();
		$(".list-container").toggleClass("showlist");
		$(".go-to-container").addClass("showlink");
		$(".go-to-container.showlink").fadeIn("slow");
		$(".boxtext:nth-child(2)").fadeIn("slow");
		//$(".boxtext:nth-child(2)").addClass("showtext");
		$(".descriptor-link").removeClass("showlink");
		$(".descriptor-link:nth-child(2)").addClass("showlink");
		
	});
	$(".part3").click(function() {
		//$(".boxtext").removeClass("showtext");
		$(".boxtext").hide();
		$(".list-container").toggleClass("showlist");
		$(".go-to-container").addClass("showlink");
		$(".go-to-container.showlink").fadeIn("slow");
		$(".boxtext:nth-child(3)").fadeIn("slow");
		//$(".boxtext:nth-child(3)").addClass("showtext");
		$(".descriptor-link").removeClass("showlink");
		$(".descriptor-link:nth-child(3)").addClass("showlink");
	});
	$(".part4").click(function() {
		//$(".boxtext").removeClass("showtext");
		$(".boxtext").hide();
		$(".list-container").toggleClass("showlist");
		$(".go-to-container").addClass("showlink");
		$(".go-to-container.showlink").fadeIn("slow");
		$(".boxtext:nth-child(4)").fadeIn("slow");
		//$(".boxtext:nth-child(4)").addClass("showtext");
		$(".descriptor-link").removeClass("showlink");
		$(".descriptor-link:nth-child(4)").addClass("showlink");
	});
	$(".part5").click(function() {
		//$(".boxtext").removeClass("showtext");
		$(".boxtext").hide();
		$(".list-container").toggleClass("showlist");
		$(".go-to-container").addClass("showlink");
		$(".go-to-container.showlink").fadeIn("slow");
		$(".boxtext:nth-child(5)").fadeIn("slow");
		//$(".boxtext:nth-child(5)").addClass("showtext");
		$(".descriptor-link").removeClass("showlink");
		$(".descriptor-link:nth-child(5)").addClass("showlink");
	});
		

		
		
		
		
		
});