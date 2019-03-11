var data = {
	todo:[]
}

var removeSVG = '';

document.addEventListener('DOMContentLoaded', init)

function init(){
	
document.getElementById('add').addEventListener('click', pushAdd);
document.getElementById('item').addEventListener('keydown', checkItem);
document.getElementById('itemh').addEventListener('keydown', checkItem);
renderList()




};

function pushAdd() {
 //localStorage.clear()
  var valueh = document.getElementById('itemh').value;
  var value = document.getElementById('item').value;
  if (value) {
	Note.titleh=valueh;
	Note.description=value;
	addItemToDOM(valueh);
	checkItem();
  }
}

function addItem (value) {

  document.getElementById('item').value = '';
  document.getElementById('itemh').value = '';
  data.todo.push(value);
  dataObjectUpdated();
}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function checkItem(e) {
  var value = this.value;
  if(e){
	  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
	    addItem(value);
	  }
	}
	else{addItem(value)}
}

var Note={
	date: getDate(),
	titleh: null,
	description:null,
	chbox: false	//console.log(this.date, this.titleh, this.description, this.chbox)
}

var NoteActions={
	//proto
}

function getDate(){
	date = new Date();
	date=date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
	return date;
}

function addItemToDOM(value) {
	var date,valueh, description, chbox
	valueh=value;
	
	var obj=JSON.stringify(Note)
	localStorage.setItem(valueh, obj); //запишем его в хранилище по ключу "myKey"
	var returnObj = JSON.parse(localStorage.getItem(valueh))
	data.todo.push(returnObj);
	
	console.log(returnObj)
		
	var list = document.getElementById('todo');
	var item = document.createElement('li');
    list.insertBefore(item, list.childNodes[1]);
    
    valueh = document.createElement('div');
    valueh.innerText = String(returnObj.titleh)
    valueh.className='valueh'
    item.appendChild(valueh)
    
    description = document.createElement('div');
    description.innerText = String(returnObj.description)
    description.className='description'
    item.appendChild(description)
    
	date = document.createElement('div');
    date.innerText = String(returnObj.date)
    date.className='date'
    item.appendChild(date)
    

    
    var check = document.createElement('button');
	check.className='check';
    item.appendChild(check)
    document.addEventListener('click', getFlag)
}

function getFlag(e){
	var check = document.getElementById('button');
    var target = e.target;
       if (target.className == 'check') 		
			target.style.background = "green";
			Note.chbox=true;
			alert(Note.chbox)

}

function renderList() {
	var sKey
for (var i = 0 ; window.localStorage.length; i++) {
	sKey = window.localStorage.key(i)
    value = window.localStorage.getItem(sKey);
    addItemToDOM(value);
}
}