function mostrar()
{
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 'si';

	do{
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);
		
		if(numero >= 0){
			positivo = positivo + numero;
		}
		else{
			negativo = negativo * numero;
		}

		do{
			respuesta = prompt("Quiere Seguir? Ingrese si o no" );	
		}while( respuesta != "si" && respuesta != "no" )
	}while( respuesta == 'si' );

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN