var divs, bodys, ps, scripts,hd, lnk, i, j
divs=0, bodys=0, ps=0, scripts=0, hd=0, lnk=0;

function start(){
	var elems;
	
	elems=document.documentElement.children //head & body
	setMassive(elems)
	
	elems = document.head.children //head
	setMassive(elems)
	
	elems = document.body.children //body
	setMassive(elems)

	for (i = 0; i< document.body.children.length ; i++){
		
		elems = document.body.children[i]
		elems = elems.children
		//console.log(elems[i])
		setMassive(elems)
}
}

function statistic(elems, i){
	//console.log(elems[i].tagName)
	if (elems[i].tagName=="DIV"){divs=divs+1;}
	else if (elems[i].tagName=="LINK"){lnk=lnk+1;}
	else if (elems[i].tagName=="HTML"){htms=htms+1;}
	else if (elems[i].tagName=="HEAD"){hd=hd+1;}
	else if (elems[i].tagName=="BODY"){bodys=bodys+1;}
	else if ((elems[i].tagName=="P1") || (elems[i].tagName=="P2")||(elems[i].tagName=="P3"))
	{ps=ps+1}
	else if (elems[i].tagName=="SCRIPT"){scripts=scripts+1;}

}

function setMassive(elems){
		for(var i=0 ; i < elems.length ; i++ ){
		statistic(elems, i)

	    }
}

start()
console.log("div: " + divs + "\nbody: " + bodys + "\np: " + ps + "\nscript: " + scripts + "\nhead: " + hd + "\nlink: " + lnk)
