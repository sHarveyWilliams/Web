document.addEventListener('DOMContentLoaded', init)

function init(){
	var input_text, pushb
	
	pushb = document.getElementById('push_btn');
	pushb.addEventListener('click', pushAdd)
	
	input_text = document.getElementById('input_text');
	input_text.addEventListener('change', setInput)

};

function pushAdd() {
		if((isFinite(input_text.value))&&(input_text.value!='')){
			
			if((input_text.value>=1) && (input_text.value<=100)){
		 	}
		 	else{
			 	alert("Не тот промежуток ")
			 	input_text.value=''
			 	}
			 	}
		else{
			alert("Ошибка")
			input_text.value=''
		}
		}

function setInput() {
	}


