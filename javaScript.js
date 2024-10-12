
    //PRODUCTO TITULO
    let h1 = document.querySelector("h1");
    h1.classList.add("product");
    h1.innerText = "Productos";

    //ARREGLO DE PRODUCTOS & MAPEO
    const data = [{
        id: 1,
        title: "BMW Serie 3",
        detail: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
        price: 93207,
        Stock: 2,
        car_condition: "Nuevo",
        categoria: "Sedanes"
      }, {
        id: 2,
        title: "Aston Martin",
        detail: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
        price: 250000,
        Stock: 1,
        car_condition: "Nuevo"
        ,
        categoria: "Hypercar"
      }, {
        id: 3,
        title: "Mercedes AMG",
        detail: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
        price: 95000,
        Stock: 2,
        car_condition: "Nuevo"
        ,
        categoria: "Sedanes"
      }, {
        id: 4,
        title: "Audi a5",
        detail: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
        price: 72000,
        Stock: 4,
        car_condition: "Nuevo"
        ,
        categoria: "Deportivo"
      }, {
        id: 5,
        title: "Ferrari",
        detail: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
        price: 95454,
        Stock: 1,
        car_condition: "Usado"
        ,
        categoria: "Antiguos"
      }, {
        id: 6,
        title: "Lamborghini",
        detail: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
        price: 81812,
        Stock: 5,
        car_condition: "Nuevo"
        ,
        categoria: "Hypercar"
      }, {
        id: 7,
        title: "Chevrolet",
        detail: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
        price: 50000,
        Stock: 1,
        car_condition: "Usado"
        ,
        categoria: "Antiguo"
      }, {

        id: 8,
        title: "Dodge Challenger",
        detail: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
        price: 93662,
        Stock: 5,
        car_condition: "Nuevo"
        ,
        categoria: "Deportivo"
      }, {
        id: 9,
        title: "Maserati GT",
        detail: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
        price: 89470,
        Stock: 8,
        car_condition: "Nuevo"
        ,
        categoria: "Deportivo"
    }]
    
    
    
    let cards = data.map((productos) => 
    `<div  class="card"> <img src="${productos.img}" alt="" width="170px">
        <h1 class="title" id="card_title">${productos.title}</h1>
        <p class="detail" id="detail">${productos.detail}</p>
        <p class="price" id="price">$${productos.price}</p>
        <p class="stock" id="stock">${productos.Stock}Un.</p>
        <p class="condition" id="condition">${productos.car_condition}</p>
        <a href="/Productos/productos.html?prod=${productos.id}" ><button class="btn" type="button">Ver mas</button></a></div> `
    );
        document.querySelector(".container").innerHTML = cards.join().replaceAll(",", "");

    //BUSCADOR

      let btnFilter = document.getElementById("filter-btn");
      let btnClean = document.getElementById("clean-btn");
      let input = document.querySelector("input");
    
        const filter = () => {
      let filtered = data.filter((productos) => productos.title.toLowerCase() === input.value.toLowerCase())
        if(filtered.length === 1){
            
      let cards =  filtered.map((productos) => 
        
          `<div  class="card"> <img src="${productos.img}" alt="" width="170px">
          <h1 class="title" id="card_title">${productos.title}</h1>
          <p class="detail" id="detail">${productos.detail}</p>
          <p class="price" id="price">$${productos.price}</p>
          <p class="stock" id="stock">${productos.Stock}Un.</p>
          <p class="condition" id="condition">${productos.car_condition}</p>
          <a href="/Productos/productos.html?prod=${productos.id}" ><button class="btn" type="button">Ver mas</button></a></div> `
      );
          document.querySelector(".container").innerHTML = cards.join().replaceAll(",", "");
            
          }else{
            console.log("producto no encontrado")
          }
        }       
      //BOTON DE BORRAR INPUT 
      btnClean.addEventListener("click", () => input.value = "");
    

      