	alert("Введите ваше имя");
	var fName=prompt();
	alert(fName + " " + "введите ваш возраст");
	var Year=prompt();
	if ((Year<=14)&&(Year>=11)){
	var fYear= (Year % 10);
		switch(fYear){
			case 0: alert(Year + " " + "лет");
			break;
			case 1: alert(Year + " " + "лет");
			break;
			case 2: alert(Year + " " + "лет");
			break;
			case 3: alert(Year + " " + "лет");
			break;
			case 4: alert(Year + " " + "лет");
			break;
			default:
	    	alert("Ошибка, обновите страницу");
			}
	}
	else{
	var fYear= (Year % 10);
		switch(fYear){
			case 0: alert(Year + " " + "лет");
			break;
			case 1: alert(Year + " " + "год");
			break;
			case 2: alert(Year + " " + "года");
			break;
			case 3: alert(Year + " " + "года");
			break;
			case 4: alert(Year + " " + "года");
			break;
			case 5: alert(Year + " " + "лет");
			break;
			case 6: alert(Year + " " + "лет");
			break;
			case 7: alert(Year + " " + "лет");
			break;
			case 8: alert(Year + " " + "лет");
			break;
			case 9: alert(Year + " " + "лет");
			break;
			default:
	    	alert("Ошибка, обновите страницу");
			}
		}
	alert(fName + " " + "курите ли вы? (Да/Нет)");
	var Smoking=prompt();
	switch(Smoking){
		case "Да":
				if(Year<18){
					alert(fName + " " + "маме расскажу");
				}
				else{
	    	    alert("Ну и зря" + " " + fName);
	    	    }
	    	break;
	    case "Нет":
	    		if(Year>18){
					alert(fName + " " + "молодец, и не надо");
				}
				else{
	    	    alert('Красавчик!' + " " + fName);
	    	    }
	    	break;
	    default:
	    	alert("Ошибка, обновите страницу");
}
