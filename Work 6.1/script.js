	var game = {
	};
	

		
	game.init = function(field){
				var i, j, field;
		var process = 1;
		var BasicArr = [];

		alert("Игра крестики нолики")
		BasicArr=game.getMassive(field)
		alert(BasicArr)

		while(process>0){
				alert("Ход крестиков")
				i=game.getRowAndColumn();
				j=game.getRowAndColumn();
				if (BasicArr[i][j]=="-")
					{
						
					}
				else{
					while((BasicArr[i][j]=="x")||(BasicArr[i][j]=="o")){
						alert("Ячейка занята! Попробуйте другой ход");
						i=game.getRowAndColumn();
						j=game.getRowAndColumn();
					}
				}
				game.getMoveX(BasicArr, i, j);
				console.clear()
				console.log(BasicArr.join('\n'));
					if (((BasicArr[0][0]=="x"&BasicArr[0][1]=="x"&BasicArr[0][2]=="x")||(BasicArr[0][0]=="x"&BasicArr[1][0]=="x"&BasicArr[2][0]=="x")||((BasicArr[1][0]=="x"&BasicArr[1][1]=="x"&BasicArr[1][2]=="x")||(BasicArr[2][0]=="x"&BasicArr[2][1]=="x"&BasicArr[2][2])=="x")||(BasicArr[0][0]=="x"&BasicArr[1][1]=="x"&BasicArr[2][2]=="x")||(BasicArr[0][2]=="x"&BasicArr[1][1]=="x"&BasicArr[2][0])=="x")){
						alert("Победа крестиков!"); 
						process=0;
						break;}
							else{
						
						}
				alert("Ход ноликов")
				i=game.getRowAndColumn();
				j=game.getRowAndColumn();
				if (BasicArr[i][j]=="-")
					{
						
					}
				else{
					while((BasicArr[i][j]=="x")||(BasicArr[i][j]=="o")){
						alert("Ячейка занята! Попробуйте другой ход");
						i=game.getRowAndColumn();
						j=game.getRowAndColumn();
					}
				}
				game.getMoveO(BasicArr, i, j);
				console.clear()
				console.log(BasicArr.join('\n'));
					if (((BasicArr[0][0]=="o"&BasicArr[0][1]=="o"&BasicArr[0][2]=="o")||(BasicArr[0][0]=="o"&BasicArr[1][0]=="o"&BasicArr[2][0]=="o")||((BasicArr[1][0]=="o"&BasicArr[1][1]=="o"&BasicArr[1][2]=="o")||(BasicArr[2][0]=="o"&BasicArr[2][1]=="o"&BasicArr[2][2])=="o")||(BasicArr[0][0]=="o"&BasicArr[1][1]=="o"&BasicArr[2][2]=="o")||(BasicArr[0][2]=="o"&BasicArr[1][1]=="o"&BasicArr[2][0])=="o")){
						alert("Победа ноликов!");
						process=0;
						break;}
							else{
						}
			}
		};
	
	game.getMoveX = function(BasicArr, i, j){
			return BasicArr[i][j] = "x";
	};
	
	game.getMoveO = function(BasicArr, i, j){
			return BasicArr[i][j] = "o";
	};
	
	game.getRowAndColumn = function(){
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
	};
	
	game.getMassive = function(field){
	var BasicArr = [];
		for(var i = 0; i < field; i++) {
				BasicArr[i] = [];
				for(var j = 0; j < field; j ++) BasicArr[i].push("-"); 
			}
		
		return BasicArr;
	};
	
//game.init(field)
