/*
Vazquez Victor Esteban
COSIGNAS:

	_Variables / COnstantes
	_Interaccion con el usuario:
		(Prompt, Alert, Confirm, Console)

	_Ciclo de Interaccion (For, While, Do-while)

	_Un condicional

	_Funciones js


MI CODIGO:
MODULOS clasicos:
	_Ingreso 



MODULOS del PROBLEMA:
*/


/*##############################################################################################################*/
/*##############################################################################################################*/
/*______________________________________VARIABLES Y CONSTANTES GLOBALES_____________________________________*/
//Simula una base de datos minima:

const producto_1= parseInt(5000)

const producto_2= parseInt(4000)

const producto_3= parseInt(3000)

const producto_4= parseInt(2000)

const producto_5= parseInt(1000)



/*##############################################################################################################*/
/*##############################################################################################################*/
/*_______________________________________________FUNCIONES___________________________________________________*/
/*##############################*/


/*#################################################################*/
//______________FUNCION PRINCIPAL (MAIN=Coordinador)________________

let opcion=0;


function main() {
	/*========================================*/
	//___Variables de inicio del programa____
	let nombre
	let preguntar= 1


	/*=======================================*/
	//___________Variables de menu____________
	
	/*=======================================*/
	/*=======================================*/
	/*=======================================*/
	//______________DESARROLLO____________

	alert("Buenas, Bienvenido")
	nombre=prompt("Me podrias dar tu NOMBRE: ")
	//alert("Muchas gracias")



	while (preguntar==1) {
		
		menu(nombre)
		

		micro_procesos(nombre)

		preguntar= parseInt(prompt("Desea iniciar de nuevo?: Presione: \n 1 Continuar \n 0 Terminar"))
	
		//NOTA: POner verificacion

	}

	alert("MUCHAS GRACIAS POR UTILIZAR NUESTRA PAGINA. FELIZ NAVIDAD")
	// menu(nombre) // LE DIRE AL TUTOR QUE LA INVOQUE DESDE CONSOLA

	/*=======================================*/
	/*=======================================*/
	/*=======================================*/



//	alert()
//	prompt()

//  confirm
//  warn


}




/*#################################################################*/
//_____________________________MENU_________________________________


function menu(nombre) {

	opcion=parseInt(prompt("Hola   Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MAYOR PRECIO(+) \n 2: Producto MENOR(-) PRECIO \n 3: Mayor a... \n 4: Menor a... \n 5: Igual a... "))

	//==============================================================
	//Verificacion
	while(opcion == "" || opcion == null || (opcion!=1 && opcion!=2 && opcion!=3 && opcion!=4 && opcion!=5 )){
		console.warn("ERROR Ingrese una opcion valida: ")
		//parseInt(opcion)=prompt("Hola  "+ nombre +"  Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MENOR PRECIO \n 2: Proucto MAYOR PRECIO \n 3: Mayor a \n 4: Menor a \n 5: Igual a ")
		opcion=parseInt(prompt("Hola  "+ nombre +"  Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MENOR PRECIO \n 2: Proucto MAYOR PRECIO \n 3: Mayor a \n 4: Menor a \n 5: Igual a "))

	}
	//==============================================================

}


/*#################################################################*/
//__________________MICRO-PROCESOS________________


let mayor=parseInt(0);
let menor=parseInt(0);
let igual=parseInt(0);
let senal=0;

function micro_procesos(nombre) {

	/*======================================================*/
	/*________Variables de las funciones________*/

	let precio_ingresado= 0

	switch (opcion) {
		case 1:
			//===============================
			//Producto MAYOR PRECIO
			filtrar_Mayor_Menor()

			alert("El PRODUCTO MAS CARO ES: "+ mayor)

			//RECORDATORIO PARA MI: Cuando pueda usar, objeto y arrays hacer que los productos se vean del mas caro al mas barato
			// 	y en viceversa

			break;
		case 2:
			//===============================
			//Producto MENOR PRECIO
			filtrar_Mayor_Menor(mayor, menor)

			alert("El PRODUCTO MAS BARATO ES: "+ menor)

			break;
		case 3:
			//===============================
			//Producto MAYOR A....
			precio_ingresado=parseFloat(prompt("Ingrese un precio en numeros, para comparar con nuestros productos: "))
			

			console.log("LISTA DE PRODUCTOS, con PRECIO MAYOR a....: "+precio_ingresado+"\n\n")
			parseInt(senal=1)
			filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)
			
			break;
		case 4:
			//===============================
			//Producto MENOR A....
			precio_ingresado=parseFloat(prompt("Ingrese un precio en numeros, para comparar con nuestros productos: "))
			senal=2
			console.log("LISTA DE PRODUCTOS, con PRECIO MENOR a....: "+precio_ingresado+"\n\n")
			filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)

			break;
		case 5:
			//===============================
			//Producto IGUAL A....
			precio_ingresado=parseFloat(prompt("Ingrese un precio en numeros, para comparar con nuestros productos: "))
			senal=3
			console.log("LISTA DE PRODUCTOS, con PRECIO IGUAL a....: "+precio_ingresado+"\n\n")
			filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)


			break;
							
		default:

			break;
	}


}



/*#################################################################*/
//________________________MAYOR-MENOR________________
function filtrar_Mayor_Menor() {
	let contador=0

	let aux

	mayor=producto_1
	menor=producto_1

	//===================================================================================================
	//Hola porsupuesto deberia UTILIZAR UN ARRAY o los hijos de un objeto, pero no me lo pide la consigna


	do{ 
		contador++
		
		switch (contador) {
			case 1:
				aux=producto_1
				break;
			case 2:
				aux=producto_2
				break;
			case 3:
				aux=producto_3
				break;
			case 4:
				aux=producto_4
				break;
			case 5:
				aux=producto_5
				break;
			default:
				
				break;
		}


		if(aux!=mayor){
			if(aux>mayor){
				//MAYOR
				mayor=aux
			}else{
				if(aux!=menor){
					//MENOR
					menor=aux
				}
			}	
		}else{
			//IGUAL
			//nada
		}

	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar //ERROR: Aqui esta el error.
	//===================================================================================================

}


/*#################################################################*/
//______________FILTRAR MAYOR A________________
function filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado) {
	let contador=0

	let aux=0

	mayor=producto_1
	menor=producto_1

	do{ 

		contador++
		
		switch (contador) {
			case 1:
				aux=producto_1
				break;
			case 2:
				aux=producto_2
				break;
			case 3:
				aux=producto_3
				break;
			case 4:
				aux=producto_4
				break;
			case 5:
				aux=producto_5
				break;
			default:
				
				break;
		}


		if(aux!=precio_ingresado){
			if(aux>precio_ingresado && senal==1 ){
				//MAYOR
				console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio: "+aux)
			}
		}


		if(aux!=precio_ingresado){
			if(aux<precio_ingresado && senal==2){
				//MAYOR
				console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio: "+aux)
			}
		}


		if(aux==precio_ingresado && senal==3){
			//MENOR
			console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio: "+aux)
		}



	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar
	//===================================================================================================

	//ERROR: Resolver si no existe ningun producto, mayor, menor o igual

}

/*##############################################################################################################*/
/*##############################################################################################################*/
/*________________________________________LLAMADO DE LAS FUNCIONES______________________________________________*/
/*##############################*/

//console.log("hola") //SALE POR CONSOLA
//alert("hola 2") //Es CARTEL
//confirm("hola A")//Es CARTEL
//console.warn("hola 3") //SALE POR CONSOLA


//Por favor, invoque "main()" desde la consola, presionando f12, gracias.


