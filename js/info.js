/*
**************************
Author: Poison Mushroom
Version: 1.0.0
**************************
*/

(function($) {

$(document).ready(function() {

		resetUI();
		//resize
		$(window).resize(function () {
				resetUI();
		});

});

function resetUI(){
	var wd = $('body').width();
	$('ul.donka li').css({
		'width': parseInt(wd*0.4)+'px',
		'height': parseInt(wd*0.4)+'px'
	});
}

})(jQuery);
