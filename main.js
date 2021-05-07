
// $('.cabe input').focus(function() { 
//     $(this).on("input", function(){
//     var value = $(this).val();
//     var attr = $(this).attr('name')
//     console.log( attr + " : " + value)
//     });
// });

$('.tex').on('focusout', function(){

	var value = $(this).val();
	var name = $(this).attr('name');
	char.addElem({name});
	char[name] = value;
	console.log(name + ":" + char[name]);

	if(char.geracao > 6 && char.geracao < 14){
	setarSangue();	
}
	
})

	


//*_______________________________________________Sistema vantagens

$(".area").focus(function(){
	console.log($(this).closest('.bolado').children().attr('class'));
	 $(this).on("input", function(){
    var value = $(this).val();
    $(this).attr('name', value);
    $(this).closest('.bolado').children().attr('class', value);
    

});
	});

$('.area').on('focusout', function(){
	var value = $(this).val();
	char.addElem({value});
    char[value] = 1;
    $(this).siblings().children('li:not(:first-child)').children().each(function(){
    	$(this).css('background-color', 'rgb(255, 255, 255)')
    	});	
	})



















