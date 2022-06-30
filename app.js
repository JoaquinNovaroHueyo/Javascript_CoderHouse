const productosTienda = [
    {"id": 1, "nombre": "Combo arco elfico", "img": "./img/products/arco.png", "precio": 1900, "cantidad": 1},
    {"id": 2, "nombre": "Combo baculo sagrado", "img": "./img/products/baculo.png", "precio": 4650, "cantidad": 1},
    {"id": 3, "nombre": "Combo casco guerrero", "img": "./img/products/casco1.png", "precio": 7300, "cantidad": 1},
    {"id": 4, "nombre": "Combo corona Andruil", "img": "./img/products/corona.png", "precio": 10900, "cantidad": 1},
    {"id": 5, "nombre": "Combo casco Osgiliath", "img": "./img/products/casco2.png", "precio": 9900, "cantidad": 1},
    {"id": 6, "nombre": "Combo túnica Druida", "img": "./img/products/elf.png", "precio": 8400, "cantidad": 1},
    {"id": 7, "nombre": "Combo armadura Pantheon", "img": "./img/products/enano.png", "precio": 11500, "cantidad": 1},
    {"id": 8, "nombre": "Combo espada del Rey", "img": "./img/products/espada1.png", "precio": 8200, "cantidad": 1},
    {"id": 9, "nombre": "Combo hacha Matagoblin", "img": "./img/products/hacha.png", "precio": 13000, "cantidad": 1},
    {"id": 10, "nombre": "Combo vestimenta Hobbit", "img": "./img/products/hobbit.png", "precio": 4100, "cantidad": 1},
    {"id": 11, "nombre": "Combo túnica Gandalf", "img": "./img/products/mago.png", "precio": 7250, "cantidad": 1},
    {"id": 12, "nombre": "Combo sombrero de mago", "img": "./img/products/sombrero.png", "precio": 1900, "cantidad": 1},
]


const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})




function renderizarProductos(){

    let tienda = document.getElementById('tienda');

    productosTienda.forEach((e)=>{
        
        let productoHTML = 
        `<div class="cardCombo">
        <div class="imgBx">
            <img src="${e.img}" alt="arco">
            <ul class="action">
                <li>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span>Agregar a Favoritos</span>
                </li>
                <li>
                    <i class="fa fa-shopping-cart" aria-hidden="true" onclick="agregarProductoAlCarrito(${e.id})"></i>
                    <span>Agregar al Carrito</span>
                </li>
                <li>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <span>Ver Detalles</span>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="productName">
                <h3>${e.nombre}</h3>
            </div>
            <div class="price_rating">
                <h2>${e.precio}</h2>
                <div class="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>

        `
        tienda.innerHTML += productoHTML
    })
}

renderizarProductos()

const agregarProductoAlCarrito = (prodId) => {
    const existe = carrito.some (producto => producto.id === prodId)

    if (existe){ 
        const prod = carrito.map (producto=> { 
            if (producto.id === prodId){
                producto.cantidad++
            }
        })
    } else { 
        const item = productosTienda.find((prod) => prod.id === prodId)
        
        carrito.push(item)
    }
   
    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((producto) => producto.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarrito()
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) =>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio:$${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}














// PRIMER PROYECTO
// //Constuctor de clientes

// class cliente {
//     constructor(id, nombre, dni, edad, prestamo, cuotas){
//         this.id = id
//         this.nombre = nombre
//         this.dni = dni
//         this.edad = edad
//         this.prestamo = prestamo
//         this.cuotas = cuotas
//     }
// }

// const clientes = []

// clientes.push( new cliente('1', 'Manuel', 30231091, 35, 30000, 6))
// clientes.push( new cliente('2', 'Joaquin', 41632641, 25, 70000, 12))
// clientes.push( new cliente('3', 'Ramon', 37232094, 27, 120000, 3))
// clientes.push( new cliente('4', 'Sofia', 21231091, 55, 1500000, 5))
// clientes.push( new cliente('5', 'Maria', 49891021, 20, 1221000, 9))
// clientes.push( new cliente('6', 'Juan', 1133068, 75, 65000, 2))
// clientes.push( new cliente('7', 'Josefina', 27095437, 44, 350000, 10))
// clientes.push( new cliente('8', 'Sebastian', 34987456, 29, 535000, 12))
// clientes.push( new cliente('9', 'Camila', 27234999, 37, 96000, 6))
// clientes.push( new cliente('10', 'Changuito', 990121, 97, 12430000, 1))

// console.log(clientes)


   
//     //Funcion para ingresar nombre del cliente
//     function nombre1(){
//     let nombre1 = (prompt("Usted ha ingresado en la sección de prestamos, ingrese su nombre para continuar"));
//     alert("Gracias por elegirnos" + " " + nombre1)
//     return nombre1
//     }

//     //Funcion para ingresar DNI del cliente
//     function dni1(){
//         let dni1 = parseInt(prompt("Por favor ingrese su numero de DNI"));
//         alert("El DNI ingresado es" + " " + dni1)
//         return dni1
//         }

//     function edad1(){
//             let edad1 = parseInt(prompt("Por favor ingrese su edad"));
//             while(edad1 < 18){
//                 alert("Debe ser mayor de edad para solicitar un préstamo")
//                 edad1 = parseInt(prompt("Por favor ingrese su edad"));
//             }
//             alert("El dato ingresado es:" + " " + edad1 + " " + "años de edad")
//             return edad1
//     }


//     //Funcion para ingresar monto del prestamo
//     function cantidad1(){
//         let cantidad1 = parseInt(prompt("A continuación ingrese el monto del prestamo a solicitar"));
//         alert("La cantidad es = " + cantidad1)
//         return cantidad1
//     }

//     //Funcion para ingresar cuotas a pagar
//     function cuotas1(){
//         let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
//         while( cuotas1 > 12){
//             alert("Debe elegir una cantidad del 1 al 12")
//             cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
//         }
//         alert("Desea el prestamo en " + cuotas1 + " cuotas?")
//         return cuotas1
//     }

//     //Capturar resultado de funciones
//     let nombre = nombre1()
//     let dni = dni1()
//     let edad = edad1()
//     let prestamo = cantidad1()
//     let cuotas = cuotas1()
    
   

//     //Mostrar resultado de funciones
//     console.log("Nombre del cliente: " + nombre)
//     console.log("DNI del cliente: " + dni)
//     console.log("Edad del cliente: " + edad)
//     console.log("Monto del préstamo: " + prestamo)
//     console.log("Cantidad de cuotas:" + cuotas)

//     //Funcion para dividir cantidad en cuotas
//     function dividir(dato1, dato2){
//        let resultado = dato1 / dato2;
//        return resultado
//     }

//     //Capturar cantiddad / cuotas
//     let division = dividir(prestamo, cuotas)

//     //Mostrar resultado
//     console.log("El cliente " + nombre + " de " + edad + " años de edad, DNI: "+ dni + " solicita el préstamo:" + cuotas + " cuotas de " + division)
//     alert("El cliente " + nombre + " de " + edad + " años de edad, DNI: "+ dni + " solicita el préstamo: " + cuotas + " cuotas de " + division)


// //High order functions

// //Busco prestamos mayores a cierto monto de clientes menores a cierta edad
// const prestamosDeRiesgo = clientes.filter ( (el) => {
//     return (el.edad <= 30 && el.prestamo >= 500000)
// })

// console.log (prestamosDeRiesgo)


// //Quiero saber cual es la mayor cantidad de cuotas posibles
// const cantidadCuotas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log( "La mayor cantidad de cuotas posibles son: " + Math.max(...cantidadCuotas) )