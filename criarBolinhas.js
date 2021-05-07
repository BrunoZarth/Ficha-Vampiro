
var criarBolinhas = function(){
		$('.bolinhas').append('<li id="bolinha" class="liCheia"><div id="bola" class="cheia"></div></li>');
	for(i=1; i<=4; i++){
	$('.bolinhas').append('<li id="bolinha" class="liVazia"><div id="bola" class="bolinha"></div></li>');	
}
	for(i=1; i<=10; i++){
	$('.bolinhasDez').append('<li id="bolinha" class="liVazia"><div id="bola" class="bolinha"></div></li>');}

	for(i=1; i<=10; i++){
	$('.quadradinhosDez').append('<li id="bolinha" class="liVazia"><div id="bola" class="quadradinho"></div></li>');}

	};

criarBolinhas();