
var forcaDeVontadeDiario = function(){

	if(char.forcaDeVontade == 0){
	var quadradinhosForca = $("#quadradinhosHumanidade > li > div");
			quadradinhosForca.eq(0).css('background-color', 'white');	
		}

	for(i=0; i < char.forcaDeVontade; i++){
		var quadradinhosForca = $("#quadradinhosHumanidade > li > div");
		quadradinhosForca.eq(i).css('background-color', 'black');
		var proximo = i + 1;
		quadradinhosForca.eq(proximo).css('background-color', 'white');	

		char.forcaDeVontadeDiarios = proximo;
	}
};




$('.bolinhasDez .bolinha').on('click', forcaDeVontadeDiario());


$("#quadradinhosHumanidade > li > div").on('click', function(){
	if($(this).css('background-color') == "rgb(0, 0, 0)"){
		$(this).css('background-color', 'rgb(255, 255, 255)');
		char.forcaDeVontadeDiarios--;
		console.log("Força de vontade diários restantes: " + char.forcaDeVontadeDiarios);
	}

});


