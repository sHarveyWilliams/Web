	var list = document.getElementById('squares')
	var add_btn = document.getElementById('add_btn')
	var div_el = document.createElement('div');
	
	var pushb = document.getElementById('push_btn');
	var inputex = document.getElementById('inputex');
	
	var left_btn = document.getElementById('btn_left')
	var right_btn = document.getElementById('btn_right')
	
	var up_btn = document.getElementById('btn_up')
	var down_btn = document.getElementById('btn_down')
	
	var pos, posx, posy;
	
	pos=0; posx=0; posy=0;
	div_el.style.width = "100px";
	div_el.style.height = "100px";
	div_el.style.backgroundColor = 'black';
	list.appendChild(div_el)

add_btn.addEventListener('click', function() {
	var sqr = document.createElement('div');
	sqr.style.width = "100px";
	sqr.style.height = "100px";
	sqr.style.backgroundColor = 'black';
	pos=pos+20;
	sqr.style.marginLeft=pos+"px";
	list.appendChild(sqr)
});

left_btn.addEventListener('click', function() {
	posx = posx - 20;
	list.style.marginLeft = posx+"px";
});

right_btn.addEventListener('click', function() {
	posx =  posx + 20;
	list.style.marginLeft = posx+"px";
});

down_btn.addEventListener('click', function() {
	posy = posy + 20;
	list.style.marginTop = posy+"px";
});

up_btn.addEventListener('click', function() {
	posy =  posy - 20;
	list.style.marginTop = posy+"px";
});

pushb.addEventListener('click', function() {
		if(inputex.value!==""){
		for (var i = 0; i < list.childElementCount; i++)
			{
			list.children[i].style.backgroundColor = "red";}}
			else{alert("error")}

});




