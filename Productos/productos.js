// class Producto {
//     constructor(logo, titulo, detalle, precio, stock, imagen) {
//         this.logo = logo;
//         this.titulo = titulo;
//         this.detalle = detalle;
//         this.precio = precio;
//         this.stock = stock;
//         this.imagen = imagen;
//     }
// }

// const producto = new Producto(
//     "https://static.vecteezy.com/system/resources/previews/019/956/127/non_2x/bmw-transparent-bmw-free-free-png.png",
//     "BMW Serie 3",
//     "El BMW Serie 3 es una berlina media premium del segmento D, 5 plazas y tracción trasera o total fabricada por BMW. Cuenta con motores diésel y gasolina, con potencias comprendidas entre 120 y 320 CV, si bien también existe una versión deportiva denominada BMW M3 con 431 CV.  Se fabrica en la planta  Munich, Alemania, pero también en las plantas que BMW tiene en Tiexi, China, y México, concretamente en la factoría de San Luis Potosí donde se trasladó parte de la producción en 2018.", "Valor: $50.000",
//     "Un. Disponible/s: 3", "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
// );

// const producto2 = new Producto(
//     "",
//     "Chevrolet 1955",
//     "El Chevrolet 1955 es símbolo de la era dorada de los autos estadounidenses, apreciado tanto por su ingeniería como por su estilo atemporal, lo que lo hace ideal para una tienda que ofrezca productos relacionados con autos clásicos o la cultura vintage.",
//     "Valor: $100.000",
//     "Un. Disponible/s: 1", 
//     "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
// )
    


    const data = [{
        id: 1,
        title: "BMW Serie 3",
        detail: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        img: "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
        price: 93207,
        Stock: 2,
        car_condition: "new"
      }, {
        id: 2,
        title: "Aston Martin",
        detail: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        img: "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
        price: 250000,
        Stock: 1,
        car_condition: "new"
      }, {
        id: 3,
        title: "Mercedes AMG",
        detail: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        img: "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
        price: 95000,
        Stock: 2,
        car_condition: "new"
      }, {
        id: 4,
        title: "Audio a5",
        detail: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        img: "http://dummyimage.com/450x300.png/dddddd/000000",
        price: 72000,
        Stock: 4,
        car_condition: "new"
      }, {
        id: 5,
        title: "Ferrari",
        detail: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        img: "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
        price: 95454,
        Stock: 1,
        car_condition: "new"
      }, {
        id: 6,
        title: "Lamborghini",
        detail: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        img: "http://dummyimage.com/450x300.png/dddddd/000000",
        price: 81812,
        Stock: 5,
        car_condition: "new"
      }, {
        id: 7,
        title: "Chevrolet",
        "detail": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
        "price": 50000,
        "Stock": 1,
        "car_condition": "Used"
      }, {
        id: 8,
        title: "R-Class",
        detail: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        img: "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
        price: 93662,
        Stock: 5,
        car_condition: "new"
      }, {
        id: 9,
        title: "Land Cruiser",
        detail: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        img: "http://dummyimage.com/450x300.png/ff4444/ffffff",
        price: 89470,
        Stock: 8,
        car_condition: "new"
    }]

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productoId = urlParams.get('id');

    



    let cards = data.filter((productos => productos.id == ids)
    `<div class="contenido">
        <img class="logo" src="${productos.id}" >
        <h1 class="title">${productos.title}</h1>
        <img class="image" src="${productos.img}" >
        <p class="detail">${productos.detail}</p>
        <p>${productos.price}</p>
        <p>${productos.Stock}</p>
    </div> `)
    document.querySelector("main").innerHTML = cards;

