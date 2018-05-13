console.log('have fun !');

$(':input').keyup(function(e){
	var input=$(':input');
	if(e.which==13){
		var entree=[input[0].value,input[1].value,input[2].value];
		$('#username').text(input[0].value+" "+input[1].value);
		console.log(entree);
	} 
})