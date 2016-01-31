$(document).ready(function(){
	
	$("#o-num").text(Cookies.get("oreo"))

		if (Cookies.get("oreo") == 0){
		or = parseInt(0)
	} else {
		or = Cookies.get("oreo")
	}

	$("#oreo-c").on("click", function(){
		or = parseInt(or) + 1 ;
		Cookies.set("oreo", or);
		$("#o-num").text(Cookies.get("oreo"));
	});





	$("#s-num").text(Cookies.get("sugar"))

		if (Cookies.get("sugar") == 0){
		su = parseInt(0)
	} else {
		su = Cookies.get("sugar")
	}

	$("#sugar-c").on("click", function(){
		su = parseInt(su) + 1 ;
		Cookies.set("oreo", su);
		$("#o-num").text(Cookies.get("oreo"));
	});





	$("#cc-num").text(Cookies.get("ChocolateChip"))

		if (Cookies.get("chocolatechip") == 0){
		ch = parseInt(0)
	} else {
		ch = Cookies.get("chocolatechip")
	}

	$("#choco-c").on("click", function(){
		ch = parseInt(ch) + 1 ;
		Cookies.set("oreo", ch);
		$("#o-num").text(Cookies.get("oreo"));
	});



		
});