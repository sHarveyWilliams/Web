document.addEventListener('DOMContentLoaded', initGame)

let combinations, player, dataX, dataO;

dataX = [];
dataO = [];

player='X';

combinations = [
		[0, 1, 2],
		[0, 3, 6],
		[0, 4, 8],
		[1, 4, 7],
		[2, 5, 8],
		[3, 4, 5],
		[6, 7, 8],
		[2, 4, 6]
	]

function initGame(){
	const gameField=document.body.children[1];
	const info = document.body.children[0].children[0];
	
    let promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resetGame();
			resolve()
			}, 1000);
    });
    promise.then(
		result=>{document.getElementById('reset-game').addEventListener('click', resetGame);								gameField.addEventListener('click', gameRun);
	getField();
	});
};
	
function gameRun(event){
	const target = event.target;
	const gameField = document.body.children[1];
	const info = document.body.children[0].children[0]

	num=+target.getAttribute('elmntgame')
	
	
    	if (target.className!='game-item') return;

		if(player=='X'){
			dataX.push(num)
			target.innerHTML='<img src="img/cross.png" class="cross">';
			changePlayer();
		}
		
		else{
			
			dataO.push(num)
			target.innerHTML='<img src="img/zero.png" class="zero">'
			changePlayer();
		}
		
		
		if ((dataX.length > 2 && checkWin(dataX, num))||(dataX.length && (checkWin(dataO, num)))){
			changePlayer();
			alert(`Победили: ${player}`);
			resetGame();
					
		}
		
		else{
			gameField.insertBefore(target, target.nextSibling);
		}
		
		if ((dataX.length===5) || (dataO.length===5)){
			alert(`Ничья`);
			resetGame();
		}
		
}

 function getField(){
	const gameField=document.body.children[1];
	let gameElm;
	
	gameField.innerHTML='';
	
	for(let i=0 ; i<9 ; i++)
	{
		gameElm=document.createElement('div');
		gameElm.className='game-item';
		gameElm.setAttribute('elmntGame', i)
		gameField.appendChild(gameElm);
	}
}

 function resetGame(){
	arr=[];
	dataX = [];
	dataO = [];
	player='X'
	showMove()
	getField();
}

function changePlayer() {
	const info = document.body.children[0].children[0]
	player === 'X' ? player = 'O' : player = 'X';
	showMove()
}

function showMove(){
	const info = document.body.children[0].children[0];
	info.innerHTML=`Новая игра. Ход игрока: ${player}`
}

function checkWin(arr, number){
	for (let i = 0; i < combinations.length; i++) {
		let winArr = combinations[i];
		let count = 0;
		if (winArr.indexOf(number) !== -1) {
			for (let i = 0; i < winArr.length; i++) {
				if (arr.indexOf(winArr[i]) !== -1) {
					count++;
					if (count === 3) {
						return true;
					}
				}
			}
		}
	}
}