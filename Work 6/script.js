/*

26.03.2019
*/


var game = {
		process: null,
		playerX: 'Крестики',
		playerO: 'Нолики',
		
		init: function(){
		var process, arr1, arr2, arr3, allMoves, BasicArr;
		arr1 = ["-", "-", "-"];
		arr2 = ["-", "-", "-"];
		arr3 = ["-", "-", "-"];
		allMoves = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
		BasicArr = new Array(arr1, arr2, arr3);
		
		alert("Игра крестики нолики");
		
		for(var k=0; k<=9 ; k++){
			if(allMoves[k]=='x'){
				alert("Ход :" + this.playerX);
				}
			else{
				alert("Ход :" + this.playerO);
			}
				i=this.getRowAndColumn();
				j=this.getRowAndColumn();
				
				
				
				if (BasicArr[i][j]=="-")
					{
						BasicArr[i][j]=allMoves[k];
					}
				else{
						while((BasicArr[i][j]=="x")||(BasicArr[i][j]=="o")){
							alert("Ячейка занята! Попробуйте другой ход");
							i=this.getRowAndColumn();
							j=this.getRowAndColumn();
						}
						BasicArr[i][j]=allMoves[k];
					}
				
				console.clear()
				console.log(BasicArr.join('\n'));
				
				process=this.checkGame(BasicArr, allMoves[k])
				
				if(process=='win'){
					break;
				}
		  
		}
	},
	
	checkGame: function(BasicArr, value){
			if (((BasicArr[0][0]==value&BasicArr[0][1]==value&BasicArr[0][2]==value)||
			(BasicArr[1][0]==value&BasicArr[1][1]==value&BasicArr[1][2]==value)||
			(BasicArr[2][0]==value&BasicArr[2][1]==value&BasicArr[2][2]==value)||
			
			(BasicArr[0][0]==value&BasicArr[1][0]==value&BasicArr[2][0]==value)||
			(BasicArr[0][1]==value&BasicArr[1][1]==value&BasicArr[2][1]==value)||
			(BasicArr[0][2]==value&BasicArr[1][2]==value&BasicArr[2][2]==value)||
			
			(BasicArr[0][0]==value&BasicArr[1][1]==value&BasicArr[2][2])==value)||
			(BasicArr[0][2]==value&BasicArr[1][1]==value&BasicArr[2][0]==value))
				{
					alert("Победили: " + value);
					return 'win';
								}
			else{
								
					return 'fall';
								}
	},
	
	getRowAndColumn: function(){
			value=+prompt("Введите значение");
			if (value<=2){
				return value;
			}
			else{
				while(value>2){
					value=+prompt("Ошибка! Введите значение еще раз");
				}
				return value;
			}
	}
	}
game.init()
