$(document).ready(function(){
	

	if (Cookies.get("oreo-c")== null){
		oNum = 0;
	} else {
		oNum = parseInt(Cookies.get("oreo-c"));
		document.getElementById("oNum").innerHTML = Cookies.get("oreo-c");
	}

	$("#oreo-c").on("click", function(){
		oNum = oNum + 1 
		Cookies.set("oreo-c", oNum);
		document.getElementById("oNum").innerHTML = Cookies.get("oreo-c");
	});



	if (Cookies.get("sugar-c")== null){
		sNum = 0;
	} else {
		sNum = parseInt(Cookies.get("sugar-c"));
		document.getElementById("sNum").innerHTML = Cookies.get("sugar-c");
	}

	$("#sugar-c").on("click", function(){
		sNum = sNum + 1
		Cookies.set("sugar-c", sNum);
		document.getElementById("sNum").innerHTML = Cookies.get("sugar-c");
	});



	if (Cookies.get("choco-c")== null){
		cNum = 0;
	} else {
		cNum = parseInt(Cookies.get("choco-c"));
		document.getElementById("cNum").innerHTML = Cookies.get("choco-c");
	}

	$("#choco-c").on("click", function(){
		cNum = cNum + 1 
		Cookies.set("choco-c", cNum);
		document.getElementById("cNum").innerHTML = Cookies.get("choco-c");
	});



	$("#clear").on("click", function(){
		oNum = 0
		Cookies.set("oreo-c", oNum);
		document.getElementById("oNum").innerHTML = Cookies.get("oreo-c");
		sNum = 0
		Cookies.set("sugar-c", sNum);
		document.getElementById("sNum").innerHTML = Cookies.get("sugar-c");
		cNum = 0
		Cookies.set("choco-c", cNum);
		document.getElementById("cNum").innerHTML = Cookies.get("choco-c");
		
	})
		
});
