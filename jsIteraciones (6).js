function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;

	/*
	while( contador < 5 ){
		numero = prompt("Ingrese: ");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador = contador + 1;
	}
	*/

	/*
	do{
		numero = prompt("Ingrese: ");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador = contador + 1;
	}while( contador < 5 );
	*/

	for( contador = 0; contador < 5; contador = contador + 1){
		numero = prompt("Ingrese: ");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio; 

}//FIN DE LA FUNCIÓN