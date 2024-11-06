    let log = document.getElementById("navbarLog")
    let nav = `<div>${localStorage.getItem("email") ? `<a onclick="closeSection()"><h3 class="logout">Cerrar Sesion</h3></a>`  : `<a href="login/login.html"><h3 class="login">Iniciar Sesion</h3></a>`}</div>`;
    log.innerHTML = nav;

    function closeSection(){
      localStorage.clear();
      window.location.href = "/login/login.html"
    }
        


let navBar = document.querySelector("#cart");
let carBuy = `<div>${localStorage.getItem("email") ? `<li>hola, ${localStorage.getItem("email")}</li>
        <a href="/cart/cart.html"><span class="carrito" id="cart"><img width="55px" src="/images/carrito.jpg" alt="" class="cartimg"></span></a>
        <b class="cantidad" id="quantity">${localStorage.getItem("quantity")}</b>` : `<h1>Inicia sesion</h1>`} </div>`

        navBar.innerHTML = carBuy;



        if(localStorage.getItem("cart").length == 0){
          const quantityTag = document.querySelector("#quantity")
          quantityTag.innerText = quantity;
        }


  


