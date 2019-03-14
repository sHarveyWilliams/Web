	document.addEventListener('DOMContentLoaded', init)
function init(){
	var list = document.getElementById('squares')
	document.getElementById('add_btn').addEventListener('click', addBtn)
	var div_el = document.createElement('div');
	
	document.getElementById('btn_left').addEventListener('click', leftBtn)
	document.getElementById('btn_right').addEventListener('click', rightBtn)
	
	document.getElementById('btn_up').addEventListener('click', upBtn)
	document.getElementById('btn_down').addEventListener('click', downBtn)
	
	document.getElementById('push_btn').addEventListener('click', pushBtn)
	
	

	div_el.style.width = "100px";
	div_el.style.height = "100px";
	div_el.style.backgroundColor = 'black';
	list.appendChild(div_el)
};

	var pos, posx, posy;
	
	pos=0; posx=0; posy=0;

function addBtn() {
		var list = document.getElementById('squares')
	var sqr = document.createElement('div');
	sqr.style.width = "100px";
	sqr.style.height = "100px";
	sqr.style.backgroundColor = 'black';
	pos=pos+20;
	sqr.style.marginLeft=pos+"px";
	list.appendChild(sqr)
};

function leftBtn() {
	var list = document.getElementById('squares')
	posx = posx - 20;
	list.style.marginLeft = posx+"px";
};

function rightBtn() {
		var list = document.getElementById('squares')
	posx =  posx + 20;
	list.style.marginLeft = posx+"px";
};

function downBtn() {
		var list = document.getElementById('squares')
	posy = posy + 20;
	list.style.marginTop = posy+"px";
};

function upBtn() {
		var list = document.getElementById('squares')
	posy =  posy - 20;
	list.style.marginTop = posy+"px";
};

function pushBtn() {
		var list = document.getElementById('squares')
	var inputex = document.getElementById('inputex');
		if(inputex.value!==""){
		for (var i = 0; i < list.childElementCount; i++)
			{
			list.children[i].style.backgroundColor = "red";}}
			else{alert("error")}

};
