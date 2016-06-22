$(document).ready(function(){


	/////////////////////////////////////////////
	//SECTION FOR MAIN PAGE FUNCTIONS 
	/////////////////////////////////////////////
	
	//When the "sidebar-hide-button" is clicked, it toggles whether
	//the sidebar is shown or not
	var sidebar_shown = 1; //1 means that the sidebar is shown
	var fullscreen_active = 0; //0 means that fullscreen is not active
	var music_controls; //variable for timeout of music controls
	$(".sidebar-hide-button").click(function() {
		if(sidebar_shown == 1) {
			$(".sidebar-wrapper").css("width", "0px");
			$(".overhead-wrapper").css("width", "100%");
			$(".main-content-wrapper").css("width", "100%");
			$(".main-block-wrapper").css("width", "24.5%");
			if(fullscreen_active == 1) {
				$(".fullscreen-wrapper").css("width", "100%");
				$(".maximized-box").css("bottom", "50px");
				$(".bottom-selector-wrapper").css("bottom", "20px");
				$(".bottom-box-wrapper").css("opacity", "0.2");
			}
			//Switches the button of the sidebar
			$(".sidebar-button").removeClass("fa-times");
			$(".sidebar-button").addClass("fa-bars");
			
			music_controls = setTimeout(deactivate_music_controls, 300);
			sidebar_shown = 0;
		}
		else {
			$(".sidebar-wrapper").css("width", "26%");
			$(".overhead-wrapper").css("width", "75%");
			$(".main-content-wrapper").css("width", "75%");
			$(".main-block-wrapper").css("width", "32%");
			if(fullscreen_active == 1) {
				$(".sidebar-wrapper").css("width", "25%");
				$(".fullscreen-wrapper").css("width", "75%");
				$(".maximized-box").css("bottom", "200px");
				$(".bottom-selector-wrapper").css("bottom", "100px");
				$(".bottom-box-wrapper").css("opacity", "0.2");
			}
			//Switches the button of the sidebar
			$(".sidebar-button").removeClass("fa-bars");
			$(".sidebar-button").addClass("fa-times");
			
			music_controls = setTimeout(activate_music_controls, 300);
			sidebar_shown = 1;
		}
		
	});
	function activate_music_controls() {
		$(".album-cover").fadeIn();
		$(".current-playing-wrapper").fadeIn();
		$(".playlist-wrapper").fadeIn();
	}
	function deactivate_music_controls() {
		$(".album-cover").fadeOut();
		$(".current-playing-wrapper").fadeOut();
		$(".playlist-wrapper").fadeOut();
	}
	

	
	/////////////////////////////////////
	//SECTION OF CODE FOR THE GALLERY
	/////////////////////////////////////
	
	var image_list = ["media/gallery/e_01.jpg","media/gallery/e_02.jpg","media/gallery/e_03.jpg","media/gallery/e_04.jpg","media/gallery/e_05.jpg",
	"media/gallery/b_01.png","media/gallery/b_02.png", "media/gallery/b_03.png","media/gallery/b_04.png","media/gallery/b_05.png",
	"media/gallery/b_06.png","media/gallery/b_07.png"];
	
	//Creates a block for each image on the front page gallery
	var image_index = 0;
	var load_all_images = setInterval(load_images, 300);
	
	function load_images() {
		var html_image_block = '<div class = "main-block-wrapper">' +
				'<div class = "main-block block' + image_index + '"></div>' +
			'</div>';
		$(".main-content-wrapper").append(html_image_block);
		$(".block" + image_index).css("background-image",
		"url(" + image_list[image_index] + ")");
		$(".block" + image_index).css("opacity", "0");
		$(".block" + image_index).fadeTo("300","1.0");
		
		image_index++;
		
		if(image_index >= image_list.length) {
			clearInterval(load_all_images);
		}
	}
	
	/////////////////////////////////////
	//SECTION OF CODE FOR THE FULLSCREEN
	// Is dependent upon variable image_list from GALLERY
	/////////////////////////////////////
	
		//Allows a block to be maximized. Basically opens up a div that fades in
	//with the desired image fullscreened.
	var fullscreen_controls;  //variable for the timeout for the fullscreen_controls
	var current_image_index; //variable for the current image index
	$(document).on('click', '.main-block-wrapper', function() {
		current_image_index = $(this).index();
		update_fullscreen(current_image_index);
		
		fullscreen_controls = setTimeout(activate_fullscreen_controls, 300);
		
		if(sidebar_shown == 1) {
			$(".fullscreen-wrapper").css("width", "75%");
			$(".maximized-box").css("bottom", "200px");
			$("body").css("overflow-y", "hidden"); //prevents scrolling during fullscreen
			$(".bottom-selector-wrapper").css("bottom", "100px");
			$(".sidebar-wrapper").css("width", "25%");
			fullscreen_active = 1;
		}
		else {
			$(".fullscreen-wrapper").css("width", "100%");
			$(".maximized-box").css("bottom", "50px");
			$("body").css("overflow-y", "hidden"); //prevents scrolling during fullscreen
			$(".bottom-selector-wrapper").css("bottom", "20px");
			$(".bottom-box-wrapper").css("opacity", "0.2");
			fullscreen_active = 1;
		}
		
	});
	//Function for updating fullscreen images
	
	function update_fullscreen(index) { //When fullscreen is clicked via gallery
		var pseudo_index = index;
		var lower2 = pseudo_index - 2;
		var lower1 = pseudo_index - 1;
		if((index - 1) < 0){
			pseudo_index = image_list.length;
			lower2 = pseudo_index - 2;
			lower1 = pseudo_index - 1;
		}
		else if((index - 2) < 0) {
			pseudo_index = image_list.length;
			lower2 = pseudo_index - 2;
			lower1 = 0;
		}
		
		pseudo_index = index;
		var upper1 = pseudo_index + 1;
		var upper2 = pseudo_index + 2;
		if((index + 1 >= image_list.length)) {
			pseudo_index = -1;
			upper1 = pseudo_index + 1;
			upper2 = pseudo_index + 2;
		}
		else if((index + 2 >= image_list.length)) {
			upper1 = image_list.length -1;
			upper2 = 0;
		}
		
		
		$(".maximized-box").css("background-image", "url(" + image_list[index] + ")");
		$(".lower-box-1").css("background-image", "url(" + image_list[lower2] + ")");
		$(".lower-box-2").css("background-image", "url(" + image_list[lower1] + ")");
		$(".lower-box-3").css("background-image", "url(" + image_list[index] + ")");
		$(".lower-box-4").css("background-image", "url(" + image_list[upper1] + ")");
		$(".lower-box-5").css("background-image", "url(" + image_list[upper2] + ")");
		
	}
	
	//Change lower boxes by clicking on them
	$(".bottom-image-box").click(function() {
		var shift = $(this).index();
		update_lower_boxes(current_image_index, shift);
	});
	//Change lower boxes by clicking on the chevrons
	$(".previous-select-wrapper").click(function() {
		update_lower_boxes(current_image_index, 1);
	});
	$(".after-select-wrapper").click(function() {
		update_lower_boxes(current_image_index, 3);
	});
	//Function for updating the lower boxes of the fullscreen
	//This might be confusing, because clicking on a left lower box means a right shift
	function update_lower_boxes(index, shift) { //shift is the index of bottom_image_box
		var true_shift = [-2,-1,0,1,2];
		index = index + true_shift[shift];
		
		if(index == -1 ) {
			index = image_list.length - 1;
		}
		else if(index == -2 ) {
			index = image_list.length - 2;
		}
		else if(index  == (image_list.length + 1)) {
			index = 1;
		}
		else if(index == image_list.length) {
			index = 0;
		}
		update_fullscreen(index);
		current_image_index = index;
	}
	
	//Function for the left and right arrows
	
	
	//Function for exiting the fullscreen mode
	$(".exit-fullscreen-wrapper").click(function() {
		fullscreen_controls = setTimeout(deactivate_fullscreen_controls, 300);
		$(".fullscreen-wrapper").css("width", "0px");
		$("body").css("overflow-y", "auto");
		fullscreen_active = 0;
	});
	//Helper functions for fullscreens
	function activate_fullscreen_controls() {
		$(".exit-fullscreen-wrapper").fadeIn();
		$(".maximized-box").fadeIn();
		$(".bottom-selector-wrapper").fadeIn();
	}
	function deactivate_fullscreen_controls() {
		$(".exit-fullscreen-wrapper").fadeOut();
		$(".maximized-box").fadeOut();
		$(".bottom-selector-wrapper").fadeOut();
	}
	
	//Changes opacity of the bottom boxes
	$(".bottom-box-wrapper").hover(function() {
		$(this).css("opacity", "1.0");
	}, function() {
		$(this).css("opacity", "0.2");
	});
	
	
	/////////////////////////////////////
	//SECTION FOR THE CODE FOR THE SIDEBAR
	////////////////////////////////////
	
	//Changes opacity of music controls and current title of song
	$(".album-cover").hover(function() {
		$(".current-playing-wrapper").css("opacity", "0.8");
		$(".music-controls-wrapper").css("opacity", "1.0");
	}, function() {
		$(".current-playing-wrapper").css("opacity", "0.0");
		$(".music-controls-wrapper").css("opacity", "0.3");
	});
	
	
	//Music & Album variables
	var playlist_files = ["media/music/p_01.mp3","media/music/p_02.mp3", "media/music/p_03.mp3", "media/music/p_04.mp3",
	"media/music/p_05.mp3","media/music/p_06.mp3", "media/music/p_07.mp3", "media/music/p_08.mp3", "media/music/p_09.mp3",
	"media/music/p_10.mp3"];
	var playlist_titles = ["Paris", "Papaoutai", "Sugar", "Waiting for Love", "Angels", "Candyman", "Apollo", "Red Lights",
	"If I Lose Myself", "Summertime Sadness Remix"];
	var playlist_authors = ["Magic Man", "Stromae", "Robin Shulz feat. Francesco Yates", "Avicii", "Moomimurr", 
	"Zedd & Aloe Blacc", "Hardwell feat. Amba Shepherd", "Tiësto", "Alesso vs. One Republic", "Lana Del Rey vs. Cedric Gervais"];
	var playlist_albums = ["media/albums/m_01.jpg","media/albums/m_02.jpg","media/albums/m_03.jpg","media/albums/m_04.jpg","media/albums/m_05.jpg",
	"media/albums/m_06.jpg","media/albums/m_07.jpg","media/albums/m_08.jpg","media/albums/m_09.jpg","media/albums/m_10.jpg"];
	var song_index = 0;
	var audio = $("#background-music")[0];
	
	//HTML variable for appending song items
	var html_song_boxes;
	while(song_index < playlist_files.length) {
		html_song_boxes = 
				'<div class = "playlist-item-wrapper">' +
					'<p class = "song-title">' + playlist_titles[song_index] +'</p>' +
					'<p class = "song-author">' + playlist_authors[song_index] +'</p>' +
				'</div>';
		$(".playlist-wrapper").append(html_song_boxes);
		song_index++;
	}
	
	//Allows users to choose songs from list
	var selected_song = 0;
	$(".playlist-item-wrapper:nth-child(1)").addClass("active"); //Shows that the first song is active
	$(".playlist-item-wrapper").click( function() {
		selected_song = $(this).index();  //This is an index of the nth child
		//Shows which song is currently playing
		$(".playlist-item-wrapper").removeClass("active");
		$(this).addClass("active");
		change_song();
	});
	//Changes to the next song
	audio.addEventListener("ended", function() {
		selected_song = selected_song + 1;
		if(selected_song >= playlist_files.length) {
			selected_song = 0;
		}
		var child_index = selected_song + 1;
		$(".playlist-item-wrapper").removeClass("active");
		$(".playlist-item-wrapper:nth-child(" + child_index +")").addClass("active");
		//Switches back to the beginning if the end of music files is reached
		change_song();
    });	
	
	//Function for changing songs. automatically plays next/chosen song.
	function change_song() {
		$("#music-source").attr("src", playlist_files[selected_song]);
		audio.pause();
		audio = $("#background-music")[0];
		audio.load();
		audio.play();
		//Changes the play/pause icon
		$(".center-button").removeClass("fa-play");
		$(".center-button").addClass("fa-pause");
		$(".center-button").css("left", "0px");
		//Changes album cover
		$(".album-cover").css("background-image", "url("+playlist_albums[selected_song]+")");
		//Changes the "currently playing" text
		$(".current-title").text(playlist_titles[selected_song] + " - " + playlist_authors[selected_song]);
	}
	
	
	//Alternates between modes for the music controls
	$(".music-sound-wrapper").click(function() {
		if($(".sound-button").hasClass("fa-volume-up")){
			$(".sound-button").removeClass("fa-volume-up");
			$(".sound-button").addClass("fa-volume-off");
			$("#background-music").prop('muted', true);
		}
		else {
			$(".sound-button").removeClass("fa-volume-off");
			$(".sound-button").addClass("fa-volume-up");
			$("#background-music").prop('muted', false);
		}
	});
	$(".music-play-wrapper").click(function() {
		if($(".center-button").hasClass("fa-play")){
			$(".center-button").removeClass("fa-play");
			$(".center-button").addClass("fa-pause");
			$(".center-button").css("left", "0px");
			
			audio.play();
			
		}
		else {
			$(".center-button").removeClass("fa-pause");
			$(".center-button").addClass("fa-play");
			$(".center-button").css("left", "4px");
			
			audio.pause();
			
		}
	});
	$(".music-repeat-wrapper").click(function() {
		if($(".repeat-button").hasClass("fa-repeat")){
			$(".repeat-button").removeClass("fa-repeat");
			$(".repeat-button").addClass("fa-exchange");
		}
		else {
			$(".repeat-button").removeClass("fa-exchange");
			$(".repeat-button").addClass("fa-repeat");
		}
	});
	
	
	
	
});