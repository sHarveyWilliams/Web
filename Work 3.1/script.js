﻿	alert("Введите ваш возраст");
	var Year=prompt();
	alert("Курите ли вы? (Да/Нет)");
	var Smoking=prompt();
	switch(Smoking){
		case "Да":
				if(Year<18){
					alert("Маме расскажу");
				}
				else{
	    	    alert('Ну и зря');
	    	    }
	    	break;
	    case "Нет":
	    		if(Year>18){
					alert("Молодец, и не надо");
				}
				else{
	    	    alert('Красавчик!');
	    	    }
	    	break;
	    default:
	    	alert("Ошибка, обновите страницу");
}
		
	
