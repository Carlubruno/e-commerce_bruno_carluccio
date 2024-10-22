
const data = [{
  logo: "https://static.vecteezy.com/system/resources/previews/019/956/127/non_2x/bmw-transparent-bmw-free-free-png.png",
  id: 1,
  title: "BMW Serie 3",
  detail: "El BMW Serie 3 es una berlina media premium del segmento D, 5 plazas y tracción trasera o total fabricada por BMW. Cuenta con motores diésel y gasolina, con potencias comprendidas entre 120 y 320 CV, si bien también existe una versión deportiva denominada BMW M3 con 431 CV.  Se fabrica en la planta  Munich, Alemania, pero también en las plantas que BMW tiene en Tiexi, China, y México, concretamente en la factoría de San Luis Potosí donde se trasladó parte de la producción en 2018.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
  price: 93207,
  Stock: 2,
  car_condition: "Nuevo"
}, {
  logo: "https://vectorsart.com/vectors-images/vectorsart_48082.png",
  id: 2,
  title: "Aston Martin",
  detail: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, id suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
  price: 250000,
  Stock: 1,
  car_condition: "Nuevo"
}, {
  logo: "https://logolook.net/wp-content/uploads/2023/10/AMG-Logo.png",
  id: 3,
  title: "Mercedes AMG",
  detail: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
  price: 95000,
  Stock: 2,
  car_condition: "Nuevo"
}, {
  logo: "https://download.logo.wine/logo/Audi/Audi-Logo.wine.png",
  id: 4,
  title: "Audio a5",
  detail: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
  price: 72000,
  Stock: 4,
  car_condition: "Nuevo"
}, {
  logo: "https://logodownload.org/wp-content/uploads/2017/05/ferrari-logo-25.png",
  id: 5,
  title: "Ferrari",
  detail: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
  price: 95454,
  Stock: 1,
  car_condition: "Nuevo"
}, {
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66rq65Hqugr2WpufW2Lwj0wHgj57XvF4HYg&s",
  id: 6,
  title: "Lamborghini",
  detail: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
  price: 81812,
  Stock: 5,
  car_condition: "Nuevo"
}, {
  logo: "https://i.pinimg.com/originals/c7/0c/7c/c70c7cd59b67a84f66d33ec3d4432f4a.png",
  id: 7,
  title: "Chevrolet 1955",
  detail: "El Chevrolet 1955 es símbolo de la era dorada de los autos estadounidenses, apreciado tanto por su ingeniería como por su estilo atemporal, lo que lo hace ideal para una tienda que ofrezca filterCard relacionados con autos clásicos o la cultura vintage.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
  price: 50000,
  Stock: 1,
  car_condition: "Usado"
}, {
  logo: "https://cdn.worldvectorlogo.com/logos/dodge-ram.svg",
  id: 8,
  title: "Dodge Challenger",
  detail: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
  price: 93662,
  Stock: 5,
  car_condition: "Nuevo"
}, {
  logo: "https://logos-world.net/wp-content/uploads/2021/04/Maserati-Logo.png",
  id: 9,
  title: "Maserati GT",
  detail: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
  price: 89470,
  Stock: 8,
  car_condition: "Nuevo"
}]
    
    let id = window.location.search.split("=")[1];
    
    let filterCard = data.find(filterCard => id == filterCard.id);

    if(filterCard){
      document.querySelector("main").innerHTML = `<div class="contenido">
      <div class="flex">
      <img class="logo" src="${filterCard.logo}" >
      <h1 class="title">${filterCard.title}</h1></div>
      <img class="image" src="${filterCard.img}" >
      <p class="detail">Descripcion: ${filterCard.detail}</p>
      <p class="price">Valor: $${filterCard.price}</p>
      <p class="condition">Condicion: ${filterCard.car_condition}</p>
      <p class="stock">Unidades disponibles: ${filterCard.Stock}</p>
  </div> `;
      
    }else{
      document.querySelector("main").innerText = "no encontrado";
    }
    


