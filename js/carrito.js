
const mirarCarrito = () => {
    modalContainer.innerHTML ="";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.classList = "modal-header";
    modalHeader.innerHTML = `
    <h1 class = "modal-header">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "Cerrar";
    modalbutton.className = " btn btn-outline-danger";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((books) => {
        let carritoContent= document.createElement("div");
        carritoContent.className ="modal-body";
        carritoContent.innerHTML = `
        <img src="${books.img}" class="img-thumbnail imagenes">
        <h3>${books.titulo}</h3>
        <p>$${books.precio}</p>
        <p>Cantidad: ${books.cantidad}</p>
        <p>Total: $${books.cantidad * books.precio }</p>
        <span class="delete-product btn btn-outline-primary"> ❌ </span>
        `;
        modalContainer.append(carritoContent);


        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            eliminarLibro(books.id);
        });

    });
    const total = carrito.reduce((acumulador, otro) => acumulador + otro.precio * otro.cantidad, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content modal-footer";
    totalBuying.innerHTML = `
    total a pagar: $${total}
    
    `
    const comprarButton = document.createElement("div");
    comprarButton.innerText = "Comprar";
    comprarButton.id = "botcomprar"
    comprarButton.className = "btn btn-primary btn-block";
    modalContainer.append(totalBuying);
    modalContainer.append(comprarButton);
    const botonComprar = document.getElementById('botcomprar');
    botonComprar.addEventListener('click', botonComprarClick);
    function botonComprarClick(){
        
        swal( {
            title: "¡Gracias por tu compra!",
            text: "Vuelve pronto :D",
            icon: "success",
            button: "Ok"
        });
        carrito = [];
        modalContainer.innerHTML ="";
        modalContainer.style.display = "none";
        localStorage.clear();
        
    };

};

verCarrito.addEventListener("click", mirarCarrito);


const eliminarLibro = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    mirarCarrito();
    saveLocal();
};

