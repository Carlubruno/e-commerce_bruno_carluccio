


    let array = [];
    const h1 = document.querySelector("h1");
    h1.innerText = "Productos";

    for(let i = 1; i < 10; i++){
        if(i == 1){
            title = "BMW M5"
            price = 500
        } else if (i == 2){
            title = "Gaston Martin"
            price = 800
        } else if (i == 3){
            title = "Mercedes AMG"
            price = 900
        } else if (i == 4){
            title = "Audi a5"
            price = 300
        } else{
            title = "Autito viejo"
            price = 1000
        } 
    
    
    array.push(`<div  class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="" width="170px">
        <h1 class="title" id="#card_title">${title}</h1>
        <p class="price" id="price">${price}</p>
        </div>  `);
        


    document.querySelector(".countainer").innerHTML = array.join().replaceAll(",", "");;
    }
