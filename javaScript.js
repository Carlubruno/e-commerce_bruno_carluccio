
    const h1 = document.querySelector("h1");
    h1.innerText = "Productos";
    
    function stock(){
    let array = [];
    

    for(let i = 1; i < 10; i++){
        btn = "Ver más";
        if(i == 1){
            title = "BMW M5"
            price = "$500.000"
        } else if (i == 2){
            title = "Gaston Martin"
            price = "$800.000"
        } else if (i == 3){
            title = "Mercedes AMG"
            price = "$900.000"
        } else if (i == 4){
            title = "Audi a5"
            price = "$300.000"
        } else if (i == 5){
            title = "Ferrari"
            price = "$1.000.000"
        } else if (i == 6){
            title = "Lamborghini"
            price = "$320.000"
        } else if (i == 7){
            title = "Chrysler"
            price = "$100.000"
        } else if (i == 8){
            title = "Mustang"
            price = "$360.000"
        }  else{
            title = "Masserati"
            price = "$700.000"
        }

        
    array.push(`<div  class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="" width="170px">
        <h1 class="title" id="#card_title">${title}</h1>
        <p class="price" id="price">${price}</p>
        <button class="btn" type="button">${btn}</button>
        </div>  `);
    document.querySelector(".countainer").innerHTML = array.join().replaceAll(",", "");;
    }
}
    stock();
