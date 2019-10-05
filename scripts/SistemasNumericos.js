function SistemasNumericos(){
	var numDecimal = document.forms[0].elements[0].value;

	document.forms[0].elements[1].value = DecimalaBinario(numDecimal);
	document.forms[0].elements[2].value = DecimalaOctal(numDecimal);
	document.forms[0].elements[3].value = DecimalaHexadecimal(numDecimal);
}

function DecimalaBinario(num){
	return (parseFloat(num)).toString(2);
}

function DecimalaOctal(num){
	return (parseFloat(num)).toString(8);
}

function DecimalaHexadecimal(num){
	return (parseFloat(num)).toString(16);
}