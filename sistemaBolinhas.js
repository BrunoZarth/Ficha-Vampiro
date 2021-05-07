

var sistemaBolinhas = function(){
	$('.bolinha').click(function(){
	if($(this).css("background-color") == "rgb(255, 255, 255)"){
		console.log($(this).closest('.bolado').children().attr('class'))
		$(this).css("background-color", "black");
		var suaClasse = $(this).closest('.bolado').children().attr('class');

		if(!char[suaClasse] && char[suaClasse] != 0){
			char.addElem({suaClasse});
    		char[suaClasse] = 1;
		}

		char[suaClasse]++;
		console.log(char[suaClasse]);

		if(suaClasse == "forcaDeVontade"){
			forcaDeVontadeDiario();
		}

		return false;
	  } 
	  if($(this).css("background-color") == "rgb(0, 0, 0)"){
	  	$(this).css("background-color", "white");
	  	var suaClasse = $(this).closest('.bolado').children().attr('class');
	  	console.log(suaClasse);
		char[suaClasse]--;
		console.log(char[suaClasse]);
		if(suaClasse == "forcaDeVontade"){
			forcaDeVontadeDiario();
		}
	  };		
});


  }

  sistemaBolinhas();

