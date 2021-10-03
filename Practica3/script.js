"use strict";

const buttonPoll = document.querySelector(".poll");

// SU CODIGO EMPIEZA DESDE AQUI

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer: prompt("¿Cual es tu lenguaje de programacion favorito?, 0: JavaScript,1: Python,2: Kotiln, 3: C ++", "Escriba la opcion que guste" ),
    };
    console.log(poll.options);
    
  /*  1. Cree un método llamado 'registerNewAnswer' en el objeto 'poll'. El método hace 2
    cosas:*/
    
    /*1.1. Muestre un prompt para que el usuario ingrese el número de la opción
    seleccionada. El mensaje debería verse así:
    ¿Cuál es tu lenguaje de programación favorito?
    0: JavaScript
    1: Python
    2: Kotiln
    3: C ++
    (Escriba el número de la opción que guste)*/

function alerta() 
{
var mensaje;
var opcion = prompt("¿Cual es tu lenguaje de programacion favorito?, 0: JavaScript,1: Python,2: Kotiln, 3: C ++", "Escriba la opcion que guste" );
 
if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = opcion;
            }
            document.getElementById("ejemplo").innerHTML = mensaje;
}
    /*1.2. Según el número de entrada, actualice la propiedad del array ‘answers'. Por
    ejemplo, si la opción es 3, aumente el valor en la posición 3 del array en una
    unidad. Asegúrese de verificar si la entrada es un número y si el número tiene
    sentido (por ejemplo, la respuesta 52 no tendría sentido, ¿verdad?)*/
    console.log(poll.answers);
    if(poll.registerNewAnswer==0){
        poll.answers.splice(+1);
        }
    

    /*2. Llame a este método siempre que el usuario haga clic en el botón "Answer poll"
    (este elemento ya esta seleccionado en el archivo ‘script.js’ con el nombre de
    ‘buttonPoll’, por lo tanto ya no tiene que preocuparse por seleccionarlo,
    simplemente uselo ).*/
    
   /* 3. Cree un método 'displayResults' que muestre los resultados de la encuesta. El
    método toma una cadena como entrada (llamada 'type'), que puede ser ‘string' o
    'array'. Si el tipo es 'array', simplemente muestre el array de resultados tal como
    está, usando console.log(). Esta debería ser la opción por defecto. Si el tipo es
    'string', muestre un mensaje de la siguiente forma: "Los resultados de la encuesta
    son 13, 2, 4, 1 respectivamente".
    4. Ejecute el método 'displayResults' al final de cada llamada al método
    'registerNewAnswer'.
    5. Use el método 'displayResults' para mostrar las 2 matrices que se muestran al
    final. Haga la prueba tanto con la opción 'array' como ‘string’. No pongas los arrays
    en el objeto ‘poll’. Entonces, ¿cómo debería verse ‘this’ en este caso?
    Datos de prueba para el inciso 5:
    arr1 = [5, 2, 3]
    arr2 = [1, 5, 3, 9, 6, 1]*/