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
  var nte, chbox;
  var valueh = document.getElementById('itemh').value;
  var value = document.getElementById('item').value;
  if (value) {
	nte = new getNote(getDate() ,valueh , value, false);
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

getNote.prototype.addToLS = function () {
	console.log(this)
	localStorage.setItem(this.titleh, (JSON.stringify(this)));
	
}

function getNote(date, valueh, value, chbox){
	this.date=date;
	this.titleh=valueh;
	this.description=value;
	this.chbox=chbox;
}

function getDate(){
	date = new Date();
	date=date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
	return date;
}

getNote.prototype.addItemToDOM = function() {
	var date,valueh, description, chbox, returnObj, list, item, check, nte
	nte = new getNote();
	
	list = document.getElementById('todo');
	item = document.createElement('li');
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
    menu.addEventListener('click', nte.renameNote)
    
    menu2 = document.createElement('div');
    menu2.className='menu2'
    item.appendChild(menu2)
    menu2.addEventListener('click', nte.deleteNote)
    
    check = document.createElement('button');
	check.className='check';
    item.appendChild(check)
    check.addEventListener('click', getFlag);
}

getNote.prototype.deleteNote = function(e) {
	var target, check, sKey
	target = e.target;
	check = document.getElementsByClassName('menu');
	check=(target.parentElement);
	check.remove();
	console.log(target.parentElement);
	this.valueh=check.children[0].innerText;

	for (var i = 0 ; i<window.localStorage.length; i++) {
		sKey = localStorage.key(i)
		if(this.valueh==sKey)
		{
			localStorage.removeItem(sKey);
		}}
}

getNote.prototype.renameNote = function(e) {
	var target, check, sKey
	target = e.target;
	
	check=target.parentElement;
	
	this.valueh=check.children[0].innerText;
	this.value=check.children[1].innerText;

	document.getElementById('itemh').value=this.valueh
	document.getElementById('item').value=this.value
	
	document.getElementById('add').addEventListener('click', function(){
	check.children[1].innerText=document.getElementById('item').value;})
}

function getFlag(e){
	var check, target
	check = document.getElementById('button');
    target = e.target;
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
	nte = new getNote(getDate() ,valueh , value, false);
	nte.addItemToDOM();}
}
}