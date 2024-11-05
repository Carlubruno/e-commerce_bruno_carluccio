//     const card = document.querySelector("#card_title");
//     card.innerText = "El arte de la guerra - Sun Tzu";

// // //precio


    // let title;
    // let price;
    // const boton = document.querySelector("#button");
    // const card3 = document.querySelector("#card_title");
    // const pricecard = document.querySelector("#price");

    // boton.addEventListener("click", function(){
    // title = prompt("Titulo");    
    //     card3.innerText = title;
    //     price = prompt("valor");
    //     pricecard.innerText = "$" + price;
        
        

    // let array = [];
    // const h1 = document.querySelector("#products");
    // h1.innerText = "Productos";

    // for(let i = 1; i < 3; i++){
    // array.push(`<div class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg" alt="" width="130px"> </div>`);
    // document.querySelector(".countainer").innerHTML = (array);
    // }
    

// let input1 = parseInt(prompt("ingrese un numero: "));
// let inputOperator = parseInt(prompt("ingrese un operador: 1 = + | 2 = - | 3 = /"));
// let input2 = parseInt(prompt("ingrese otro numero: "));
// let resultSuma = (input1 + input2);
// let resultResta = input1 - input2;
// let resultDivision = input1 / input2;
// if(true){
// if(inputOperator == 1){
//     alert("su suma " + resultSuma);
// }
// else if(inputOperator == 2){
//     alert("su resta " + resultResta);
// }
// else if(inputOperator == 3){
//     alert("su division:  " + resultDivision);
// }
// else{
//     alert("seleccione un operador valido");
// }
// }


// let number = parseInt(prompt("ingrese un numero entre 1 y 3!: " ));
// const random = Math.floor(Math.random()*3);

// if(number > 3 || number <= 0){
//     alert("entre 1 y 3 flaquito, o queres que te lo repita dos veces");

    
//     }else if(number != random){
//         alert("El numero no es igual, sigue intentando");
//     }
//     else{
//         alert("Acertaste!");
//     }


// .btn:hover{
//     border: 2px solid #f138f198;
//     font-style:oblique;
//     font-size: 15px;
// }
// .btn{
//     border: 2px solid #f138f198;
//     border-style:dotted;
//     width: 5rem;
//     font-size: 14px;
//     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//     text-shadow:  0 0 5px #4d4d4d;
//     position: relative;
//     left: 400px;
    
//     bottom: 115px;

//     transition: all;
//     transition-duration: .6s;
    
// }


    // function estacion1(){

    //     let dia = Number(prompt("¿Que dia es?"));
    //     let mes = Number(prompt("¿En que mes estas?"));
        
    //     let estacion;
    // if ((mes === 12 && dia >= 21) || mes === 1 || mes === 2 || (mes === 3 && dia < 21)) {
    //     estacion = "Verano";
    // }else if ((mes === 3  && dia >= 21) || mes === 4 || mes === 5 || (mes === 6 && dia < 21)) {
    //     estacion = "Otoño";
    // }else if ((mes === 6 && dia >= 21) || mes === 7 || mes === 8 || (mes === 9 && dia < 21)) {
    //     estacion = "Invierno";
    // }else if ((mes === 9 && dia >= 21) || mes === 10 || mes === 11 || (mes === 12 && dia < 21)) {
    //     estacion = "Primavera";
    // }else if (año > 2030)
    // }else{
    //     alert("introduzca datos correctos")
    // }
    // return estacion;
    // }

    // const estacionFinal = estacion1();
    // alert(estacionFinal);


    // function stock(){
    //     let array = [];
        
    
    //     for(let i = 1; i < 10; i++){
    //         btn = "Ver más";
    //         if(i == 1){
    //             title = "BMW Serie 3"
    //             price = "$50.000"
    //         } else if (i == 2){
    //             title = "Gaston Martin"
    //             price = "$800.000"
    //         } else if (i == 3){
    //             title = "Mercedes AMG"
    //             price = "$900.000"
    //         } else if (i == 4){
    //             title = "Audi a5"
    //             price = "$300.000"
    //         } else if (i == 5){
    //             title = "Ferrari"
    //             price = "$1.000.000"
    //         } else if (i == 6){
    //             title = "Lamborghini"
    //             price = "$320.000"
    //         } else if (i == 7){
    //             title = "Chrysler"
    //             price = "$100.000"
    //         } else if (i == 8){
    //             title = "Mustang"
    //             price = "$360.000"
    //         }  else{
    //             title = "Masserati"
    //             price = "$700.000"
    //         }
        
    
            
    //     array.push(`<div  class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="" width="170px">
    //         <h1 class="title" id="#card_title">${title}</h1>
    //         <p class="price" id="price">${price}</p>
    //         <a href=/Productos/productos.html ><button class="btn" type="button">${btn}</button></a>
    //         </div> `);
    //     }
        
        
    //         document.querySelector(".countainer").innerHTML = array.join().replaceAll(",", "");
    //     }
        
    
    //     stock();
    