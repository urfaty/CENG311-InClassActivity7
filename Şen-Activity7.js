$(document).ready(function() {
	// preload images

	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	


	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		
		var imgurl =  $(this).attr("href");
		var cpturl =  $(this).attr("title");
		
		$("#image").fadeOut("1000",function(){
			//var imageURL = $(this).attr("href");
			var imageURL = imgurl;
			$("#image").attr("src", imageURL);
			
			$("#image").fadeIn("1000");


		});

		$("#caption").fadeOut("1000",function(){
			//var caption = $(this).attr("title");
			var caption = cpturl;
			$("#caption").text(caption);

			$("#caption").fadeIn("1000");

		});
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click




	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready