

$('.vitalidade .quadradinho').on('click', function(){
	if($(this).css('background-color') == 'rgb(255, 255, 255)'){
	$(this).css('background', 'linear-gradient(45deg, #f9f6f6 50%, #a90c0c 50%)');
	$(this).css('background-color', 'transparent');
	} else if($(this).css('background-color') == 'rgba(0, 0, 0, 0)'){
		$(this).css('background', '');
		$(this).css('background-color', '#a90c0c');
	 } else if($(this).css('background-color') == 'rgb(169, 12, 12)'){
	 	$(this).css('background-color', 'rgb(255, 255, 255)');
	 }

});