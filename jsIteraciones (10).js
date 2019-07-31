function mostrar()
{

	var acumPositivo = 0;
	var acumNegativo = 0;
	var cantPositivo = 0;
	var cantNegativo = 0;
	var cantCero = 0;
	var cantPar = 0;
	var promPositivo;
	var promNegativo;
	var diferencia;
	var numero;
	var respuesta = 'si';

	do{
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);
		
		if(numero > 0){
			acumPositivo = acumPositivo + numero;
			cantPositivo++;
		}
		else{
			if( numero < 0){
				acumNegativo = acumNegativo + numero;
				cantNegativo++;	
			}
			else{
				cantCero++;
			}
		}

		if( numero % 2 == 0 && numero != 0 ){
			cantPar++;
		}



		do{
			respuesta = prompt("Quiere Seguir? Ingrese si o no" );	
		}while( respuesta != "si" && respuesta != "no" )
	}while( respuesta == 'si' );

	promPositivo = acumPositivo / cantPositivo;

	promNegativo = acumNegativo / cantNegativo;

	diferencia = cantPositivo - cantNegativo;

	//document.write( "Suma negativos: " + acumNegativo +  "Suma positivos: " + acumPositivo +  "Cantidad positivos: " + cantPositivo  + "Cantidad negativos: " + cantNegativo +  "Cantidad ceros: " + cantCero +  "Cantidad pares: " + cantPar +  "Promedio positivos: " + promPositivo +  "Promedio negativos: " + promNegativo + "Diferencia: " + diferencia );
	document.write( "Suma negativos: " + acumNegativo + "<br>" + "Suma positivos: " + acumPositivo + "<br>" + "Cantidad positivos: " + cantPositivo + "<br>" + "Cantidad negativos: " + cantNegativo + "<br>" + "Cantidad ceros: " + cantCero + "<br>" + "Cantidad pares: " + cantPar + "<br>" + "Promedio positivos: " + promPositivo + "<br>" + "Promedio negativos: " + promNegativo + "<br>"+ "Diferencia: " + diferencia );




}//FIN DE LA FUNCIÓN