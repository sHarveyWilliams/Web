document.addEventListener('DOMContentLoaded', init)

function init(){
	var input_text, pushb, list, div_el
	
	pushb = document.getElementById('push_btn');
	pushb.addEventListener('click', pushAdd)
	
	input_text = document.getElementById('input_text');
	input_text.addEventListener('keypress', setInput)
	

	
	

};

function pushAdd() {
			
	if((input_text.value>=1) && (input_text.value<=100)){
		var div_el
		list = document.getElementById('containerb')
		div_el = document.createElement('div');
		div_el.id='elm'
		list.appendChild(div_el)
		document.addEventListener('mousemove', onMouseMove);
		 	}
	else{
		alert("Не тот промежуток ")
		input_text.value='';
		}
	}

function setInput(e) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        e.preventDefault();
        input_text.value='';
    }
    else{}
	}

var timeout = null;
	
function heavy(e) {
    var div_el;

    timeout = null;
    
    div_el = document.getElementById('elm');
    
    div_el.style.left = e.clientX + 'px';
    div_el.style.top = e.clientY + 'px';
}

function onMouseMove(e) {
	
    if (timeout) {
         clearTimeout(timeout);
         timeout = null;    
    }
    timeout = setTimeout(function() { 
        heavy(e); 
    }, 200);
}




