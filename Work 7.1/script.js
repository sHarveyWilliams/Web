function delay(mymessage, time) {
	return function(){
    	var c_this = this;
		var a_mas = arguments;
		setTimeout(function(){mymessage.apply(c_this, a_mas);}, time);}
    
  }

  

function mymessage(arg) {
    console.log('Message: ' + arg);
}

var superFunc = delay(mymessage, 2000);

superFunc('Привет'); // сообщение отобразится через 2 секунды