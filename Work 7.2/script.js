var divs=0, bodys=0, ps=0, scripts=0

function start(){
	var elems = document.documentElement.children[1].children;
	elems = Array.prototype.slice.call(elems);
	alert(elems)
	setMassive(elems)
	

	
		
}

function statistic(elems, i){
	if (elems[i].tagName=="DIV"){divs=divs+1;}
	if (elems[i].tagName=="BODY"){bodys=bodys+1;}
	if ((elems[i].tagName=="P1") || (elems[i].tagName=="P2")||(elems[i].tagName=="P3"))
	{ps=ps+1}
	if (elems[i].tagName=="SCRIPT"){scripts=scripts+1;}
}

function setMassive(elems){
		for(var i=0 ; i < elems.length ; i++ ){
		statistic(elems, i)
	}
	return
}

start()
console.log("div: " + divs + "\nbody: " + bodys + "\np: " + ps + "\nscript: " + scripts)
