	var num_massive = [];
	var numbers=0;
	var big_number = 0;
		
	function getNumber(){
		alert("Введите число элементов массива")
		numbers=+prompt();
		return numbers;
	}
	
	function addElements(){
		alert("Вводите элементы массива")
		for (i = 0; i < numbers; i++) { 
			num_massive[i]=+prompt();
		}
		return num_massive;
	}
	
	function getBigNumber(){
		for (i = 0; i < numbers; i++) { 
			if (big_number>num_massive[i])
				continue;
			else
				big_number=num_massive[i];
		}
		return big_number;
	}
		
	function getSmallNumber(){	
		for (i = 0; i < numbers; i++) { 
			if (num_massive[i+1]>num_massive[i])
				small_number=num_massive[i];
			else 
				continue;
		}
		return small_number;
	}
	
	function getSum(){
		var sum = 0;
		for (i = 0; i < numbers; i++) { 
			sum=sum+num_massive[i];
		}
		return sum;
	}

	getNumber()
	addElements()
	getBigNumber()
	alert("Самое большое число в массиве:" + " " + 	getBigNumber())
	alert("Самое маленькое число в массиве:" + " " + getSmallNumber())
	alert("Сумма" + " " + getSum())

