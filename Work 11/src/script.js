var data = {}

document.addEventListener('DOMContentLoaded', init)

function init(){
	
document.getElementById('add').addEventListener('click', pushAdd);
document.getElementById('item').addEventListener('keydown', checkItem);
document.getElementById('itemh').addEventListener('keydown', checkItem);

renderList()




};

function pushAdd() {
 //localStorage.clear()
  var nte;
  var valueh = document.getElementById('itemh').value;
  var value = document.getElementById('item').value;
  if (value) {
	Note.titleh=valueh;
	Note.description=value;
	nte = new getNote(valueh, value);
	nte.addToLS()
	nte.addItemToDOM();
	checkItem();
  }
}

function addItem (value) {

  document.getElementById('item').value = '';
  document.getElementById('itemh').value = '';
}

function checkItem(e) {
  var value = this.value;
  if(e){
	  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
	    pushAdd();
	  }
	}
	else{addItem(value)}
}

var Note={
	date: getDate(),
	titleh: null,
	description:null,
	chbox: false
}

getNote.prototype.addToLS = function () {
	console.log(Note)
	localStorage.setItem(this.titleh, (JSON.stringify(Note)));
	
}

function getNote(valueh, value){
	this.date=getDate();
	this.titleh=valueh;
	this.description=value;
	this.chbox=false;
}

function getDate(){
	date = new Date();
	date=date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
	return date;
}

getNote.prototype.addItemToDOM = function() {
	var date,valueh, description, chbox, returnObj
	
	var list = document.getElementById('todo');
	var item = document.createElement('li');
    list.insertBefore(item, list.childNodes[1]);
    
    valueh = document.createElement('div');
    valueh.innerText = String(this.titleh)
    valueh.className='valueh'
    item.appendChild(valueh)
    
    description = document.createElement('div');
    description.innerText = String(this.description)
    description.className='description'
    item.appendChild(description)
    
	date = document.createElement('div');
    date.innerText = String(this.date)
    date.className='date'
    item.appendChild(date)
    
    menu = document.createElement('div');
    menu.className='menu'
    item.appendChild(menu)
    menu.addEventListener('click', renameNote)
    
    var check = document.createElement('button');
	check.className='check';
    item.appendChild(check)
    check.addEventListener('click', getFlag);
}

function deleteNote(e){
	var target, check, sKey, valueh
	target = e.target;
	check = document.getElementsByClassName('menu');
	check=(target.parentElement);
	check.remove();
	console.log(target.parentElement);
	valueh=check.children[0].innerText;
	//alert(valueh)
	for (var i = 0 ; i<window.localStorage.length; i++) {
		sKey = localStorage.key(i)
		if(valueh==sKey)
		{
			localStorage.removeItem(sKey);
		}}
}

function renameNote(e){
	var target, check, sKey, valueh, value
	target = e.target;
	
	check=target.parentElement;
	alert()
	valueh=check.children[0].innerText;
	value=check.children[1].innerText;

	document.getElementById('itemh').value=valueh
	document.getElementById('item').value=value
	
	document.getElementById('add').addEventListener('click', function(){
	check.children[1].innerText=document.getElementById('item').value;})
}

function getFlag(e){
	alert('click')
	var check = document.getElementById('button');
    var target = e.target;
       if (target.className == 'check') 		
			target.style.background = "green";

}

function renderList() {
	var sKey, valueh, value
	for (var i = 0 ; i<window.localStorage.length; i++) {
	sKey = localStorage.key(i)
    returnObj=(JSON.parse(localStorage.getItem(sKey)))
    if (typeof returnObj !== 'undefined' && returnObj !== null){
    //alert(returnObj.titleh)
    value=returnObj["description"]
    valueh=returnObj["titleh"]
	nte = new getNote(valueh, value);
	nte.addItemToDOM();}
}
}