class Producto {
    constructor(logo, titulo, detalle, precio, stock, imagen) {
        this.logo = logo;
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const producto = new Producto(
    "https://static.vecteezy.com/system/resources/previews/019/956/127/non_2x/bmw-transparent-bmw-free-free-png.png",
    "BMW Serie 3",
    "El BMW Serie 3 es una berlina media premium del segmento D, 5 plazas y tracción trasera o total fabricada por BMW. Cuenta con motores diésel y gasolina, con potencias comprendidas entre 120 y 320 CV, si bien también existe una versión deportiva denominada BMW M3 con 431 CV.  Se fabrica en la planta  Munich, Alemania, pero también en las plantas que BMW tiene en Tiexi, China, y México, concretamente en la factoría de San Luis Potosí donde se trasladó parte de la producción en 2018.", "Valor: $50.000",
    "Un. Disponible/s: 3", "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
);

const producto2 = new Producto(
    "",
    "Chevrolet 1955",
    "El Chevrolet 1955 es símbolo de la era dorada de los autos estadounidenses, apreciado tanto por su ingeniería como por su estilo atemporal, lo que lo hace ideal para una tienda que ofrezca productos relacionados con autos clásicos o la cultura vintage.",
    "Valor: $100.000",
    "Un. Disponible/s: 1", 
    "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
)
    
document.querySelector(".product").innerHTML = contenidoCard =
    `<div class="contenido">
        <img class="logo" src="${producto.logo}" >
        <h1 class="title">${producto.titulo}</h1>
        <img class="image" src="${producto.imagen}" >
        <p class="detail">${producto.detalle}</p>
        <p>${producto.precio}</p>
        <p>${producto.stock}</p>
    </div> `;

    document.querySelector("product2").innerHTML = contenidoCard =
    `<div class="contenido">
        <img class="logo" src="${producto2.logo}" >
        <h1 class="title">${producto2.titulo}</h1>
        <img class="image" src="${producto2.imagen}" >
        <p class="detail">${producto2.detalle}</p>
        <p>${producto2.precio}</p>
        <p>${producto2.stock}</p>
    </div> `;
