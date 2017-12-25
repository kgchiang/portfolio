$(document).ready(function() {

	$(".project").hover(
		function() {
			var selector = "#" + $(this).attr("id") + " .desc";
			var image = "#" + $(this).attr("id") + " .img_container";
			$(selector).addClass("desc_active");
			$(image).addClass("img_dim");
		}, 
		function() {
			var selector = "#" + $(this).attr("id") + " .desc";
			var image = "#" + $(this).attr("id") + " .img_container";
			$(selector).removeClass("desc_active");
			$(image).removeClass("img_dim")
		}
	);

	$(".nav_item").hover(
		function() {
			var id = "#" +$(this).attr("id");
			$(id).addClass("word_hover");
		},
		function() {
			var id = "#" +$(this).attr("id");
			$(id).removeClass("word_hover");
		}
	);

	$(".name").hover(
		function() {
			$(this).addClass("word_hover");
		},
		function() {
			$(this).removeClass("word_hover");
		}
	);

	$(".member").hover(
		function() {
			$(this).addClass("word_hover");
		},
		function(){
			$(this).removeClass("word_hover");
		}
	);

	$(".button").hover(
		function() {
			$(this).addClass("button_active");
			$(".button .read_more").addClass("read_active");
		},
		function() {
			$(this).removeClass("button_active");
			$(".button .read_more").removeClass("read_active");
		}
	);

	$(".pic_std").hover(
		function() {
			$(this).addClass("pic_rotate");
		},
		function() {
			$(this).removeClass("pic_rotate");
		}
	);
});