var game = {
		process: null,
		field: null,
		playerX: 'Крестики',
		playerO: 'Нолики',
		
		init: function(field){
		var process, allMoves, BasicArr
		
		alert("Игра крестики нолики");
		
		BasicArr=this.getMassive(this.field)
		
		for(var k=1; k<=(this.field**2)+1 ; k++){
			if(k & 1){
				alert("Ход :" + this.playerX);
				allMoves='x'
				}
			else{
				alert("Ход :" + this.playerO);
				allMoves='o'
			}
				i=this.getRowAndColumn('строка');
				j=this.getRowAndColumn('столбец');
				
				
				
				if (BasicArr[i][j]=="-")
					{
						BasicArr[i][j]=allMoves;
					}
				else{
						while((BasicArr[i][j]=="x")||(BasicArr[i][j]=="o")){
							alert("Ячейка занята! Попробуйте другой ход");
							i=this.getRowAndColumn();
							j=this.getRowAndColumn();
						}
						BasicArr[i][j]=allMoves;
					}
				
				console.clear()
				console.log(BasicArr.join('\n'));
				
				if (this.checkHorizontal(BasicArr, allMoves) || this.checkVertical(BasicArr, allMoves)
					|| this.checkDiagonal(BasicArr, allMoves)) {
						alert("Победили: " + allMoves)
					break;
				}
		  
		}
	},
	
	  checkHorizontal: function (arr, value) {
	    for (var i = 0; i < arr.length; i += 1) {
	      for (var j = 0; j < arr.length; j += 1) {
	        if (arr[i][j] === value && arr[i][j + 1] === value && arr[i][j + 2] === value) {
	          return true;
	        }
	      }
	    }
	    return false;
	  },
	
	  checkVertical: function (arr, value) {
	    for (var i = 0; i < arr.length; i += 1) {
	      for (var j = 0; j < arr.length; j += 1) {
	        if (arr[i][j] === value && arr[i + 1][j] === value && arr[i + 2][j] === value) {
	          return true;
	        }
	      }
	    }
	    return false;
	  },
	
	  checkDiagonal: function (arr, value) {
	    for (var i = 0; i < arr.length; i += 1) {
	      for (var j = 0; j < arr.length; j += 1) {
	        if (arr[i][j] === value && arr[i + 1][j + 1] === value && arr[i + 2][j + 2] === value) {
	          return true;
	        }
	      }
	    }
	    return false;
	},
	
	getMassive: function(field){
		var BasicArr=[];
		for(var i = 0; i < this.field; i++) {
					BasicArr[i] = [];
				for(var j = 0; j < this.field; j ++) 
					BasicArr[i].push("-"); 
			}
		
		return BasicArr;
	},
	
	getRowAndColumn: function(value){
			value=+prompt("Введите значение " + value);
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
game.init(field)

