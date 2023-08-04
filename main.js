function saludar(){
    let nombre = prompt("Ingresa tu nombre!");
    alert(`Hola ${nombre} ahora podrás elegir qué libro quieres`);
    
}
saludar ();
let precio = 0; 
function busca(libro, precio){
    function envio(region, precio){
        const suma  = (a,b) => a + b;
        const resta = (a,b) => a - b;
        // const iva   = x => x * 0.19;
        let descuento = 3000 
        let precioEnvio = 5000;
        if(region === 1){
            let nuevoPrecio = resta(suma(precio, precioEnvio), descuento);
            alert(`El libro que buscas es ${libro} y su precio con envío es $${nuevoPrecio}`);
        } else {
            let nuevoPrecio = (suma(precio, precioEnvio));
            alert(`El libro que buscas es ${libro} y su precio con envío es $${nuevoPrecio}`);
        }
      
    }
    
    if(libro === 1){
        libro = "Harry Potter y la Piedra Filosofal";
        precio= 18000;
        alert(`El libro que buscas es ${libro} y su precio es $${precio}`)
        let region = parseInt(prompt("Ingresa el número de la región donde vives: 1 para Santiago o 2 otra region del país"));
        envio(region, precio, libro);
 
    } else if(libro === 2) {
        libro = "Cazadores de sombras";
        precio = 25000;
        alert(`El libro que buscas es ${libro} y su precio es $${precio}`)
        let region = parseInt(prompt("Ingresa el número de la región donde vives: 1 para Santiago o 2 otra region del país"));
        envio(region, precio, libro);
      
    } else if ( libro === 3) {
        libro = "Orgullo y Prejucio";
        precio = 9990;
        alert(`El libro que buscas es ${libro} y su precio es $${precio}`)
        let region = parseInt(prompt("Ingresa el número de la región donde vives: 1 para Santiago o 2 otra region del país"));
        envio(region, precio, libro);
    }else {
       alert("Ingrese de nuevo su opción")
    }
       
}
      


let libro = parseInt(prompt("Ingresa el número del libro que buscas: 1: Harry Potter y la Piedra Filosofal, 2: Cazadores de sombras o 3: Orgullo y Prejucio"))



busca(libro);







