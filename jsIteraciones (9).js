function mostrar()
{
	var minimo;
	var maximo;
	var numero;
	var flag = 0;
	var respuesta = 'si';

	while( respuesta != 'no' ){
		numero = prompt("Ingrese: ");
		numero = parseInt( numero );

		/*
		if( flag == 0 ){
			minimo = numero;
			maximo = numero;
			flag = 1;
		}

		if( numero > maximo ){
			maximo = numero;
		}

		if( numero < minimo ){
			minimo = numero;
		}
		*/

		if( flag == 0  || numero > maximo ){
			maximo = numero;
		}

		if( flag == 0  || numero < minimo ){
			minimo = numero;
			flag = 1;
		}

		do{
			respuesta = prompt("Quiere Seguir? Ingrese si o no" );	
		}while( respuesta != "si" && respuesta != "no" );

		document.getElementById('minimo').value = minimo;
		document.getElementById('maximo').value = maximo;
	}
}//FIN DE LA FUNCIÓN