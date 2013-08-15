$(document).ready(function(){
	var initialHeight = $(window).height();
	var initialWidth = $(window).width();
	$(".bg").css({height: initialHeight, width: initialWidth});

	$(window).resize(function(){
		var height = this.$(window).height();
		var width = this.$(window).width();
		console.log(width);
		console.log($(".bg").height());
		$(".bg").css({height: height, width: width});
	});

	countdown();
	setInterval(countdown,1000)
	function countdown(){
		var now = moment();

		var then = moment([2013, 09, 12,  12]);
		var ms = then.diff(now, 'milliseconds');
		ms = then.diff(now, 'milliseconds', true);
		// get the duration as months and round down
		months = Math.floor(moment.duration(ms).asMonths());

		// subtract months from the original moment (not sure why I had to offset by 1 day)
		then = then.subtract('months', months).subtract('days', 1);
		// update the duration in ms
		ms = then.diff(now, 'milliseconds', true);
		days = Math.floor(moment.duration(ms).asDays());

		then = then.subtract('days', days);
		// update the duration in ms
		ms = then.diff(now, 'milliseconds', true);
		hours = Math.floor(moment.duration(ms).asHours());

		then = then.subtract('hours', hours);
		// update the duration in ms
		ms = then.diff(now, 'milliseconds', true);
		minutes = Math.floor(moment.duration(ms).asMinutes());
		console
		then = then.subtract('minutes', minutes);
		// update the duration in ms
		ms = then.diff(now, 'milliseconds', true);
		seconds = Math.floor(moment.duration(ms).asSeconds());

		$(".time h1").text(days +" jours "+ hours +" heures "+ minutes+" minutes "+ seconds+" secondes");

	};


});