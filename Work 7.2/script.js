var object_delay = {
	arg: "Привет"};
	
		object_delay.delay=function (mymessage,time) { 
		return setTimeout(mymessage, time)
		}
	object_delay.mymessage = function() {
	    console.log('Message: ' + object_delay.arg);
		}
	
	
	object_delay.superFunc = function(){object_delay.delay(this.mymessage, 2000);};

object_delay.superFunc(); // сообщение отобразится через 2 секунды
