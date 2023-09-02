const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let content = document.createElement("div");
content.className ="row";
let content2 = document.createElement("div");
content2.className ="col-sm-6";
let content3 = document.createElement("div");
content3.className ="card";

productos.forEach((product) => {
   
    let content4 = document.createElement("div");
    content4.className ="card-body";
    content4.innerHTML = `
        <h5 class="card-title">${product.titulo}</h5>
        <img src ="${product.img}" class="img-fluid rounded-start">
        <p class="card-text"> $${product.precio}</p>
        `;
    shopContent.append(content4);

    let comprar = document.createElement("button");
    comprar.className = "comprar btn btn-primary"
    
    comprar.innerText = "comprar";
    content4.append(comprar);
    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            titulo: product.titulo,
            precio: product.precio
        });
        saveLocal();
    });


});



