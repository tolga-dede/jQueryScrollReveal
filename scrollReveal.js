function scrollReveal() {
    var win = $(window);
var items = $(".runIn");

win.scroll(function() {
	var wTop = win.scrollTop();
	var wCenter = win.scrollTop() + win.height() ;
	
	items.each(function() {
		if ($(this).offset().top < wCenter)
			if (!$(this).hasClass("visible")) {
				$(this).addClass("visible");
			};
	});
});
win.scroll();
}
