function mostrar()
{
	var contador=0;
	var acumulador=0;
	var promedio;
	var respuesta = "si";

	while( respuesta == "si" ){
		numero = prompt("Ingrese numero: ");
		numero = parseInt(numero);
		
		acumulador = acumulador + numero;
		contador++;

		do{
			respuesta = prompt("Quiere Seguir? Ingrese si o no" );	
		}while( respuesta != "si" &&respuesta != "no" );
		
	}

	promedio = acumulador/contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value= promedio;

}//FIN DE LA FUNCIÓN