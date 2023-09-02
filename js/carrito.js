const pintarCarrito = () => {
    modalContainer.innerHTML ="";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class = "modal-header">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = " btn btn-outline-danger";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent= document.createElement("div");
        carritoContent.className ="modal-body";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.titulo}</h3>
        <p>$${product.precio}</p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.classList = "delet-product btn btn-outline-primary";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);

    });
    const total = carrito.reduce((acumulador, el) => acumulador + el.precio, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `
    total a pagar: $${total}
    
    `
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);


const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    pintarCarrito();
};

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};