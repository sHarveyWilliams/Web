	var numbers = 0;
	var num_massive = [];
	var num_massive_edit=[];
	var fmassive=[];
	alert("Введите число элементов массива")
	numbers=prompt();
	alert("Вводите элементы массива")
	for (i = 0; i < numbers; i++) { 
		num_massive[i]=prompt();
		fmassive[i]=num_massive[i];
	}
		for (i = 0; i < numbers; i++) { 
		num_massive_edit[i]=num_massive.pop();
	}
	alert("Исходный массив" + " " + fmassive);
	alert("Измененный массив" + " " + num_massive_edit);