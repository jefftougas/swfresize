function resize(height) {
	//alert("height: " + height);
	$('#flexStuff').height(height);
	
	//Callback into flex that passes $('body').height() as parameter to be used by queue
}
