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


document.querySelector("main").innerHTML = contenidoCard = `
    <div class="contenido">
        <img class="logo" src="${producto.logo}" >
        <h1 class="title">${producto.titulo}</h1>
        <img class="image" src="${producto.imagen}" >
        <p class="detail">${producto.detalle}</p>
        <p>${producto.precio}</p>
        <p>${producto.stock}</p>
    </div>
`;

