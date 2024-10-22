
    //PRODUCTO TITULO
    let h1 = document.querySelector("h1");
    h1.classList.add("product");
    h1.innerText = "Productos";

    //ARREGLO DE PRODUCTOS & MAPEOs
    
    const data = window.dataOriginal;

    const dynamicCard = (data) => {
    let cards = data.map((productos) => 
    `<div  class="card"> <img src="${productos.img}" loading="lazy" alt="" width="170px">
        <h1 class="title" id="card_title">${productos.title}</h1>
        <p class="detail" id="detail">${productos.detail}</p>
        <p class="price" id="price">$${productos.price}</p>
        <p class="stock" id="stock">${productos.Stock}Un.</p>
        <p class="condition" id="condition">${productos.car_condition}</p>
        <a href="/Productos/productos.html?prod=${productos.id}" ><button class="btn" type="button">Ver mas</button></a></div> `
    );
        document.querySelector(".container").innerHTML = cards.join().replaceAll(",", "");
  }
  dynamicCard(data);


    //BUSCADOR

      let btnFilter = document.getElementById("filter-btn");
      let btnClean = document.getElementById("clean-btn");
      let input = document.querySelector("input");
    
        const filter = () => {
      let filtered = data.filter((productos) => productos.title.toLowerCase() === input.value.toLowerCase())
        if(filtered.length === 1){
            
      let cards =  filtered.map((productos) => 
        dynamicCard(filtered)

);
          
            
          }else{
            console.log("producto no encontrado")
            dynamicCard(data);

          }
          
        } 

        // Al presionar enter en input...
        input.addEventListener("keypress", (event) =>{
          
          if(event.key === `Enter`){
            btnCleanAppear();
            filter();
          }
        }) 

              
      //BOTON DE BORRAR INPUT 
      function removeBtn (){
        dynamicCard(data);
        input.value = "";
        btnCleanAppear(); 
      
      }

            // Función para mostrar o esconder el botón de borrado.
        function btnCleanAppear(){
  const clearBtn = document.getElementById('clean-btn');
  if (input.value !== '') {
      clearBtn.style.display = 'inline';  // Mostrar el botón
  } else {
      clearBtn.style.display = 'none';  // Esconder el botón
  }
}
// Escuchar el evento 'input' para ejecutar la función cuando cambia el contenido
input.addEventListener('input', btnCleanAppear());

      
    
      //CATEGORIAS
function todos(category){
  if(category == `todos`){
      dynamicCard(data);
    }

  const filterCategory = data.filter(item => item.categoria === category)
        if(filterCategory.length > 1){
            
      let cards =  filterCategory.map((item) => 
        
          `<div  class="card"> <img src="${item.img}" loading="lazy" alt="" width="170px">
          <h1 class="title" id="card_title">${item.title}</h1>
          <p class="detail" id="detail">${item.detail}</p>
          <p class="price" id="price">$${item.price}</p>
          <p class="stock" id="stock">${item.Stock}Un.</p>
          <p class="condition" id="condition">${item.car_condition}</p>
          <a href="/Producto/producto.html?prod=${item.id}" ><button class="btn" type="button">Ver mas</button></a></div> `
      );
          document.querySelector(".container").innerHTML = cards.join().replaceAll(",", "");
            
          }else{
            ("producto no encontrado")
          }
    }




      