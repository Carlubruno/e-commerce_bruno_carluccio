
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
  Stock: 9,
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
      
      ${localStorage.getItem("email") ? `<div class="comprarflex"><span id="stock" class="cant">
        <h4 class="hstock">Cantidad:</h4>
        <button class="less" id="decreasebtn" onclick="decrease()">-</button>
        <input readonly class="inputcount" type="number" id="count" value="1">
        <button class="more" id="increasebtn" onclick="increase()">+</button>
    </span><button class="comprar" type="button" id="comprarbtn" onclick="addItem()">Agregar al carrito <span class="material-symbols-outlined">
add_shopping_cart
</span></button></div>` : `<button onclick="link()" class="comprar" type="button" id="comprarbtn">Iniciar Sesion para Comprar</button>`}

  </div> `;

    }else{
      document.querySelector("main").innerText = "no encontrado";
    }
    
    function link(){
      window.location.href = "/login/login.html"
    }

  
    let counter = document.querySelector("#count");

    let increaseBtn = document.querySelector("#increasebtn")
    function increase(){

      counter.value = Number(counter.value) + 1;
      if(counter.value > filterCard.Stock)
      counter.value = 1;
    }

    let decreaseBtn = document.querySelector("#decreasebtn")
    function decrease(){
      if(counter.value > 1){
      counter.value = Number(counter.value) - 1;
      }
      else{
        counter.value = filterCard.Stock;
      }
    }


        
    let navBar = document.querySelector("#cart");
    let carBuy = `<div> ${localStorage.getItem("email") ? `<li>hola, ${localStorage.getItem("email")}</li>
            <a href="/cart/cart.html"><span class="carrito" id="cart"><img width="55px" src="/images/carrito.jpg" alt="" class="cartimg"></span></a>
            <b class="cantidad" id="quantity">${localStorage.getItem("quantity")}</b>` : `<h1>Inicia sesion</h1>`}</div>`

            navBar.innerHTML = carBuy;



    function addItem(){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Desea agregar al carrito?",
        text: "Puedes elinarlo del carrito en cualquier momento!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Agregar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
      }).then((result) => {
        add();
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            
            title: "Agregado!",
            text: "Tu producto fue agregado al carrito.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Accion cancelada!",
            text: "Sigue buscando! :)",
            icon: "error"
          });
        }
      });
      function add(){
        Toastify({

          text: "Producto Agregado!",
          
          duration: 3000
          
          }).showToast();
          
                let cart = JSON.parse(localStorage.getItem("cart"));
                const idProduct = Number(window.location.search.split("=")[1]);
                const product = data.find(item => item.id === idProduct)
                const existeIdEnCart = cart.some(item => item.product.id === idProduct) //some es si existe devuelve true
          
                if(existeIdEnCart){
                  cart = cart.map(
                    item => {
                if(item.product.id === idProduct){
                  return {...item, quantity: item.quantity + Number(counter.value)}
          
                }else{
                  return item
                }
                })
                }else{
                  cart.push({product: product, quantity: Number(counter.value) })
                }
          
                console.log(cart)
                localStorage.setItem("cart", JSON.stringify(cart))
                counter.value = "1"
          
                let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
                localStorage.setItem("quantity", JSON.stringify(quantity))

      }

      


    }
    



