document.addEventListener('DOMContentLoaded', init)
var md, ml;
md=0;
ml=0;
function init(){
	var input_text, pushb, div_el
	
	pushb = document.getElementById('push_btn');
	pushb.addEventListener('click', pushAdd)
	
	input_text = document.getElementById('input_text');
	input_text.addEventListener('keypress', setInput)
	
	document.addEventListener('keypress', setKboard)

	
	

};

function pushAdd() {
	if((input_text.value>=1) && (input_text.value<=100)){
		var div_el, list, process
		list = document.getElementById('containerb')
		div_el = document.createElement('div');
		div_el.id='elm';
		list.appendChild(div_el)
		document.addEventListener('mousemove', onMouseMove);
		for (var i=0 ; i<input_text.value ; i++){
			var div_sqr = document.createElement('div');
			div_sqr.style.width='100px'
			div_sqr.style.height='100px'
			div_sqr.style.backgroundColor='Red'
			div_sqr.style.marginLeft=(Math.floor(Math.random() * (300 - 5 + 1)) + 5
)+'px'	
			div_sqr.className='sqr';
			list.appendChild(div_sqr)}
			
		 	}
	else{
		alert("Не тот промежуток ")
		input_text.value='';
		}

list.onmouseover = function(event) {
  var target = event.target;

  if (target.className == 'sqr') 	{	
				target.style.backgroundColor = "green";
			}
			checkSqr();
		
	}

	
}

function checkSqr(){
	var stat, list, i
	stat=0
	list = document.getElementById('containerb')
	for (i = 0; i<list.childElementCount; i++)
	{
		

		  if ((list.children[i].className == 'sqr')) 
		  {
			  if(list.children[i].style.backgroundColor == "green"){
			  stat=stat+1;}
			  else{
				  continue;
			  }
		  }

		  if(stat==(list.childElementCount-1))
		  {
					list.innerHTML='';
					input_text.value=null;
					alert("Конец")
					}

}}

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
	if(div_el!=null){
    div_el.style.left = e.clientX + 'px';
    div_el.style.top = e.clientY + 'px';
    }
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

function setKboard(e) {
	var div_el, list;

    div_el = document.getElementById('elm');
    //md=div_el.style.top
	
	if(div_el!=null){
    if (e.keyCode == '49') {
        // up arrow
        md=md-10
            div_el.style.top = md  + 'px';
    	}
    	
    else if (e.keyCode == '50') {
        // down arrow
        md=md+10
            div_el.style.top = md + 'px';
		}
    
    else if (window.event.keyCode == '51') {
       // left arrow
       ml=ml-10
           div_el.style.left = ml + 'px';
    	}
    
    else if (window.event.keyCode == '52') {
       // right arrow
       ml=ml+10;
                  div_el.style.left = ml + 'px';

		}
	}
}

