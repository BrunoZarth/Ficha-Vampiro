var igualarSangue = function(){
	var quadradinhoSangue = $('.pontosDeSangue .humanidadeUl > ul > li div');
quadradinhoSangue.css('background-color', 'white');	
for(i=0; i<char.pontosDeSangue; i++){	
	quadradinhoSangue.eq(i).css('background-color', 'black');	
}
};

var setarSangue = function(){

switch(char.geracao) {
  	case '7':
    	char.pontosDeSangue = 20;
    	char.pontosDeSangueRestantes = 20;
    	console.log("Pontos de sangue: " + char.pontosDeSangue);
    	igualarSangue();
    	break;
   	case '8':
    	char.pontosDeSangue = 15;
    	char.pontosDeSangueRestantes = 15;
    	console.log("Pontos de sangue: " + char.pontosDeSangue);
    	igualarSangue();
    	break;
  	case '9':
    	char.pontosDeSangue = 14;
    	char.pontosDeSangueRestantes = 14;
    	console.log("Pontos de sangue: " + char.pontosDeSangue);
    	igualarSangue();
    	break;
    case '10':
    	char.pontosDeSangue = 13;
    	char.pontosDeSangueRestantes = 13;
    	console.log("Pontos de sangue: " + char.pontosDeSangue);
    	igualarSangue();
    	break;
    case '11':
    	char.pontosDeSangue = 12;
    	char.pontosDeSangueRestantes = 12;
    	console.log("Pontos de sangue: " + char.pontosDeSangue);
    	igualarSangue();
    	break;
    case '12':
    	char.pontosDeSangue = 11;
    	char.pontosDeSangueRestantes = 11;
    	console.log("Pontos de sangue: " + char.pontosDeSangue);
    	igualarSangue();
    	break;
    case '13':
    	char.pontosDeSangue = 10;
    	char.pontosDeSangueRestantes = 10;
    	console.log("Pontos de sangue: " + char.pontosDeSangue);
    	igualarSangue();
}

};

var quadradinhoSangue = $('.pontosDeSangue .humanidadeUl > ul > li div');
$('.pontosDeSangue .humanidadeUl > ul > li div').on('click', function(){
	if($(this).css('background-color') == 'rgb(0, 0, 0)'){
		$(this).css('background-color', 'rgb(139, 0, 0)');
		char.pontosDeSangueRestantes--;
		console.log("pontosDeSangueRestantes" + char.pontosDeSangueRestantes);
	} else if($(this).css('background-color') == 'rgb(139, 0, 0)'){
		$(this).css('background-color', 'black');
		char.pontosDeSangueRestantes++; 
		console.log("pontosDeSangueRestantes" + char.pontosDeSangueRestantes);
	}
})

