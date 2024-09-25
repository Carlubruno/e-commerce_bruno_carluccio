
let categorias = [{
    categoria: "Clasicos", href: "/Productos/productos.html"},{
    categoria: "Sedanes", href: "/Productos/productos.html"},{
    categoria: "De lujo", href: "/Productos/productos.html"}]

let menu = [];
for(let boton of categorias){
    menu.push(`<li class="categories"><a href="${boton.href}"><h2 class="categoryText">${boton.categoria}</h2></a></li>`);

}
document.querySelector('header').innerHTML = menu.join().replaceAll(",", "");