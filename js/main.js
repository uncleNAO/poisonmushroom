/*
**************************
Author: Poison Mushroom
Version: 1.0.0
**************************
*/

(function($) {

var works_bg = new Array(
	'url(images/works00.jpg)',
	'url(images/works01.jpg)',
	'url(images/works02.jpg)'
);

var news_bg = new Array(
	'url(images/news00.jpg)',
	'url(images/news01.jpg)',
	'url(images/news02.jpg)'
);

var current = 0;
var current2 = 0;
var timer_works = null;
var timer_news = null;

$(document).ready(function() {

		resetUI();

		$('#works').mouseover(function(){
			if(timer_works === null){
				$('#works .worksbg').addClass('breath');
				timer_works = setInterval(changeWorkBg, 3000);
			}
		});

		$('#works').mouseout(function(){
			$('#works .worksbg').removeClass('breath');
			clearInterval(timer_works);
			timer_works = null;
		});

		$('#news').mouseover(function(){
			if(timer_news === null){
				timer_news = setInterval(changeNewsBg, 500);
			}
		});

		$('#news').mouseout(function(){
			clearInterval(timer_news);
			timer_news = null;
		});


		//resize
		$(window).scroll(function () {
				resetUI();
		});

});

function changeWorkBg(){
	$('#works .worksbg').css({
		'background':works_bg[current = ++current % works_bg.length],
		'background-position':'center center',
		'background-repeat':'no-repeat',
		'background-size': 'cover'
	});
}

function changeNewsBg(){
	$('#news').css({
		'background':news_bg[current2 = ++current2 % news_bg.length],
		'background-position':'center center',
		'background-size':'cover'
	});
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetUI(){
}

})(jQuery);
