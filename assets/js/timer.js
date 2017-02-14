    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining(end, place) {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(place).innerHTML = "Aeg on l&auml;bi!";

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
		if (hours   < 10) {hours   = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}

		if (days !== 0){
			document.getElementById(place).innerHTML = days + ":";
			document.getElementById(place).innerHTML += hours + ":";
		} else {                              
			document.getElementById(place).innerHTML = hours + ":";
		}                                    
			document.getElementById(place).innerHTML += minutes + ":";
			document.getElementById(place).innerHTML += seconds;
    }
