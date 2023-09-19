const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getLibros = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((books) => {
  
        let content = document.createElement("div");
        content.className ="card-body";
        content.innerHTML = `
            <h5 class="card-title">${books.titulo}</h5>
            <img src ="${books.img}" class="img-fluid imagenes">
            <p class="card-text"> $${books.precio}</p>
            `;
        shopContent.append(content);
    
        let comprar = document.createElement("button");
        comprar.className = "comprar btn btn-primary"
        
        comprar.innerText = "Agregar al carrito";
        content.append(comprar);
        comprar.addEventListener("click", () => {

            const repeat = carrito.some((repeatBook) => repeatBook.id === books.id);
            repeat ? 
            carrito.map((product) =>{
                    if(product.id === books.id){
                        product.cantidad++;
                    }})
            :     
            carrito.push({
                    id: books.id,
                    img: books.img,
                    titulo: books.titulo,
                    precio: books.precio,
                    cantidad: books.cantidad
            });
            saveLocal();
        });
    
    
    });
    
    
};

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
getLibros();



