var game = {field: null, process : 1};
		
	game.init = function (field)
	{
		var i, j;
		var BasicArr = [];
		this.field=field
		alert("Игра крестики нолики")
		BasicArr=game.getMassive(this.field)


		while(this.process>0){
				alert("Ход крестиков")
				game.getMoveX(BasicArr, i, j);
				console.clear()
				console.log(BasicArr.join('\n'));
				alert("Ход ноликов")
				game.getMoveO(BasicArr, i, j);
				console.clear()
				console.log(BasicArr.join('\n'));
					if (((BasicArr[0][0]=="x"&BasicArr[0][1]=="x"&BasicArr[0][2]=="x")||(BasicArr[0][0]=="x"&BasicArr[1][0]=="x"&BasicArr[2][0]=="x")||((BasicArr[1][0]=="x"&BasicArr[1][1]=="x"&BasicArr[1][2]=="x")||(BasicArr[2][0]=="x"&BasicArr[2][1]=="x"&BasicArr[2][2])=="x")||(BasicArr[0][0]=="x"&BasicArr[1][1]=="x"&BasicArr[2][2]=="x")||(BasicArr[0][2]=="x"&BasicArr[1][1]=="x"&BasicArr[2][0])=="x")){
						alert("Победа крестиков!"); 
						this.process=0;
						break;}
					if (((BasicArr[0][0]=="o"&BasicArr[0][1]=="o"&BasicArr[0][2]=="o")||(BasicArr[0][0]=="o"&BasicArr[1][0]=="o"&BasicArr[2][0]=="o")||((BasicArr[1][0]=="o"&BasicArr[1][1]=="o"&BasicArr[1][2]=="o")||(BasicArr[2][0]=="o"&BasicArr[2][1]=="o"&BasicArr[2][2])=="o")||(BasicArr[0][0]=="o"&BasicArr[1][1]=="o"&BasicArr[2][2]=="o")||(BasicArr[0][2]=="o"&BasicArr[1][1]=="o"&BasicArr[2][0])=="o")){
						alert("Победа ноликов!");
						this.process=0;
						break;}
							else{
						
						}
			}
		};
	
	game.getMoveX = function(BasicArr, i, j){
			i=game.getRow();
			j=game.getColumns();
			game.getCheck(BasicArr, i, j)
			return BasicArr[i][j] = "x";
	};
	
	game.getMoveO = function(BasicArr, i, j){
			i=game.getRow();
			j=game.getColumns();
			game.getCheck(BasicArr, i, j)
			return BasicArr[i][j] = "o";
	};
	
	game.getRow = function(BasicArr){
		i=game.getValue();
		return i;
		};
		
	game.getColumns = function(BasicArr){
		j=game.getValue();
		return j;
	};
	
	game.getValue = function(){
			value=+prompt("Введите значение");
			if (value<=this.field){
				return value;
			}
			else{
				while(this.field<value){
					value=+prompt("Ошибка! Введите значение еще раз");
				}
				return value;
			}
	};
	
	game.getCheck = function(BasicArr, i, j){
				if (BasicArr[i][j]=="-")
					{
					return BasicArr, i, j;
					}
				else{
					while((BasicArr[i][j]=="x")||(BasicArr[i][j]=="o")){
						alert("Ячейка занята! Попробуйте другой ход");
								i=game.getRow();
								j=game.getColumns();
					}
					return BasicArr, i, j;
				}
				};
	
	game.getMassive = function(field){
	var BasicArr = [];
		for(var i = 0; i < this.field; i++) {
					BasicArr[i] = [];
				for(var j = 0; j < this.field; j ++) 
					BasicArr[i].push("-"); 
			}
		
		return BasicArr;
	};

//game.init(field);
