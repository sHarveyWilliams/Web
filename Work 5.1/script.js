		var i, j =0;
		var process = 1;
		var board = new Array();
		alert("Игра крестики нолики")
		var arr1 = ["-", "-", "-"];
		var arr2 = ["-", "-", "-"];
		var arr3 = ["-", "-", "-"];
		var BasicArr = new Array(arr1, arr2, arr3);

		
	function GameStart(){
		while(process>0){
				alert("Ход крестиков")
				getRowAndColumn();
				getMoveX(i, j);
				console.clear()
				console.log(BasicArr.join('\n'));
					if (((BasicArr[0][0]&&BasicArr[0][1]&&BasicArr[0][2])||(BasicArr[1][0]&&BasicArr[1][1]&&BasicArr[1][2])||(BasicArr[2][0]&&BasicArr[2][1]&&BasicArr[2][2])||(BasicArr[0][0]&&BasicArr[1][1]&&BasicArr[2][2])||(BasicArr[0][2]&&BasicArr[1][1]&&BasicArr[2][0]))=="x"){
						alert("Победа крестиков!"); 
						process=0;
						break;}
							else{
						
						}
				alert("Ход ноликов")
				getRowAndColumn();
				getMoveO(i, j);
				console.clear()
				console.log(BasicArr.join('\n'));
					if (((BasicArr[0][0]&&BasicArr[0][1]&&BasicArr[0][2])||(BasicArr[1][0]&&BasicArr[1][1]&&BasicArr[1][2])||(BasicArr[2][0]&&BasicArr[2][1]&&BasicArr[2][2])||(BasicArr[0][0]&&BasicArr[1][1]&&BasicArr[2][2])||(BasicArr[0][2]&&BasicArr[1][1]&&BasicArr[2][0]))=="o"){
						alert("Победа ноликов!");
						process=0;
						break;}
							else{
						}
			}
		}
	
	function getMoveX(i, j){
			BasicArr[i][j] = "x";
			return BasicArr[i][j];
	}
	
	function getMoveO(i, j){
			BasicArr[i][j] = "o";
			return BasicArr[i][j];
	}
	
		function getRowAndColumn(){
			i=+prompt("Введите строку");
			j=+prompt("Введите колонку");
			if ((i<=2)&&(j<=2)){
				return j, i;
			}
			else{
				while((i>2)||(j>2)){
					i=+prompt("Введите строку");
					j=+prompt("Введите колонку");
				}
				return j, i;
			}
	}
	
GameStart()
