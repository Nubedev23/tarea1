
let nombrePersona = prompt("Ingresa tu nombre!");
alert(`Hola ${nombrePersona} ahora podrás buscar el libro quieres`);
const biblioteca = [
    {id:1, nombre: "Persuasión", precio:8990, autor: "Jane Austen" },
    {id:2, nombre: "Diez Negritos", precio:12990, autor: "Agatha Christie"},
    {id:3, nombre: "Estudio en escarlata", precio:7900, autor: "Arthur Conan Doyle" },
    {id:4, nombre: "Harry Potter y la Cámara de los secretos", precio:14500, autor: "J. K. Rowling"},
    {id:5, nombre: "Orgullo y Prejuicio", precio:9990, autor: "Jane Austen" },
    {id:6, nombre: "Harry Potter y la Piedra Filosofal", precio:13500, autor: "J. K. Rowling"}
];

let nombre = prompt(` ${nombrePersona}, Ingresa el nombre del libro que buscas ejemplo: Orgullo y Prejuicio. O escribe ESC para salir`);

while(nombre!="ESC"){
const book = biblioteca.find((item) => (item.nombre).toLowerCase() === nombre.toLowerCase());

if (book){
    let mensaje = `
    Nombre: ${book.nombre}
    Precio: $${book.precio}`;
alert(mensaje);
let region = parseInt(prompt(` ${nombrePersona}, ingresa el número de la región donde vives: 1 para Santiago o 2 otra region del país`));
envio(region, book.precio, book.nombre);
function envio(region, precio, nombre){
            const suma  = (a,b) => a + b;
            const resta = (a,b) => a - b;
            const iva   = x => x * 0.19;
            let descuento = 3000 
            let precioEnvio = 5000;
            if(region === 1){
                let nuevoPrecio = resta(suma(precio, precioEnvio, iva(precio)), descuento);
                alert(`El libro que buscas es ${book.nombre} y su precio con envío es $${nuevoPrecio}`);
            } else if(region ===2){
                let nuevoPrecio = (suma(precio, precioEnvio, iva(precio)));
                alert(`El libro que buscas es ${book.nombre} y su precio con envío es $${nuevoPrecio}`);
            }else{
                alert(`Recuerda que no tenemos envío internacional `);
                let region = parseInt(prompt("Ingresa el número de la región donde vives: 1 para Santiago o 2 otra region del país"));
                envio(region, precio, nombre);
            }
          
          
        }
} else {
    alert("libro no encontrado");
}
nombre = prompt(`${nombrePersona}, Ingresa el nombre del libro que buscas o escribe ESC para salir`);
}
