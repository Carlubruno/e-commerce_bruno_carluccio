


    let array = [];
    const h1 = document.querySelector("#products");
    h1.innerText = "Productos";

    for(let i = 1; i < 2; i++){
    array.push(`<div  class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg" alt="" width="170px">
        <h1 class="title" id="#card_title">BMW</h1>
        <p class="price" id="price">$687.000</p>
        </div>  `);
    array.push(`<div  class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg" alt="" width="150px">
        <h1 class="title" id="#card_title">Alfa Romeo</h1>
        <p class="price" id="price">$850.000</p>
        </div>  `);
    array.push(`<div  class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg" alt="" width="150px">
            <h1 class="title" id="#card_title">Mercedes AMG</h1>
            <p class="price" id="price">$500.000</p>
            </div>  `);
    document.querySelector(".countainer").innerHTML = array;
    }
