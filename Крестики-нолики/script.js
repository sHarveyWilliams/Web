document.addEventListener('DOMContentLoaded', initGame)

let player, BasicArr;

BasicArr = [];

player='X';

function initGame(){
	const gameField=document.getElementById('basicGameWindow');
	
	document.getElementById('reset-game').addEventListener('click', event=>resetGame(gameField));
	
	setTimeout(()=>{
		gameField.addEventListener('click', event=>gameRun(event.target, gameField));
		resetGame(gameField);
		setupField(gameField);
		}, 1000);
};
	
function gameRun(target, gameField){
	let elmntGameLine, elmntGameColumn;

	elmntGameLine=+target.getAttribute('elmntGameLine')
	elmntGameColumn=+target.getAttribute('elmntGameColumn')
	
	
	if (target.className!='game-item') return;

	getMove(elmntGameLine, elmntGameColumn);
	
	if (checkHorizontal() || checkVertical()||checkDiagonal()) {
		alert(`Победили: ${player}`);
		resetGame(gameField);
		return;
	}
	changePlayer();
	getImage(target);
		
	gameField.insertBefore(target, target.nextSibling);
};

function getMove(i, j){
	BasicArr[i][j]=player;
};

function getImage(target){
	if(player==='X'){
		target.innerHTML='<img src="img/zero.png" class="zero">';
	}
	else{
		target.innerHTML='<img src="img/cross.png" class="cross">';
	}
};

 function setupField(gameField){
	
	gameField.innerHTML='';
	
	for(i = 0; i <= 2; i++) {
		BasicArr[i] = [];
		for(j = 0; j <= 2; j ++){
			BasicArr[i].push("-"); 
			addItemField(gameField, i, j)
			}
		}
	
};

function addItemField(gameField, i, j){
	let gameElm;
	gameElm=document.createElement('div');
	gameElm.className='game-item';
	gameElm.setAttribute('elmntGameLine', i)
	gameElm.setAttribute('elmntGameColumn', j)
	gameField.appendChild(gameElm);
};

 function resetGame(gameField){
	dataX = [];
	dataO = [];
	player='X';
	showMove();
	setupField(gameField);
};

function changePlayer() {
	player = player === 'X' ? 'O' : 'X';
	showMove();
};

function showMove(){
	const info = document.getElementById('info');
	info.innerHTML=`Новая игра. Ход игрока: ${player}`
};

function checkHorizontal() {
	for (let i = 0; i < BasicArr.length; i ++) {
		 for (let j = 0; j < BasicArr.length; j ++) {
			 if (BasicArr[i][j] === player && BasicArr[i][j + 1] === player && BasicArr[i][j + 2] === player){
			 	return true;
			}
		}
	}
	return false;
};
	
function checkVertical() {
	for (let i = 0; i < BasicArr.length; i ++) {
			for (let j = 0; j < BasicArr.length; j ++) {
				 console.log(BasicArr.length)
			if (BasicArr[i][j] === player && BasicArr[i + 1][j] === player && BasicArr[i + 2][j] === player){
				  return true;
			}
		}
	}
	return false;
};
	
function checkDiagonal() {
	for (let i = 0; i < BasicArr.length; i ++) {
		for (let j = 0; j < BasicArr.length; j ++) {
			if (BasicArr[i][j] === player && BasicArr[i + 1][j + 1] === player && BasicArr[i + 2][j + 2] === player) 	{
			return true;
			}
		}
	}
	return false;
};
