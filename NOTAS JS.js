    // //Funcion para ingresar monto del prestamo
    // function cantidad1(){
    //     let cantidad1 = parseInt(prompt("ingresar el monto del prestamo a solicitar"));
    //     alert("La cantidad es = " + cantidad1)
    //     return cantidad1
    // }

    // //Funcion para ingresar cuotas a pagar
    // function cuotas1(){
    //     let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
    //     alert("Desea el prestamo en " + cuotas1 + " cuotas?")
    //     return cuotas1
    // }

    // //Capturar resultado de funciones
    // let cantidad = cantidad1()
    // let cuotas = cuotas1()

    // //Mostrar resultado de funciones
    // console.log("La cantidad es: " + cantidad)
    // console.log("Las cuotas son:" + cuotas)

    // //Funcion para dividir cantidad en cuotas
    // function dividir(dato1, dato2){
    //    let resultado = dato1 / dato2;
    //    return resultado
    // }

    // //Capturar cantiddad / cuotas
    // let division = dividir(cantidad, cuotas)

    // //Mostrar resultado
    // console.log("Usted debe pagar " + cuotas + " cuotas de " + division)
    // alert("Usted debe pagar " + cuotas + " cuotas de " + division)






// HIGHER ORDEWR FUNCTIONS

// function mayorQue(n){

//     return(m) => {
//         return m > n
//     }
// }

// const mayorQueDiez = mayorQue(10)
//     // const mayorQueDiez = (m) => {
//     //     return m > 10
//     // }




// const mayorQueVeinte = mayorQue(20)
//  // const mayorQueVeinte = (m) => {
//     //     return m > 20
//     // }


// console.log( mayorQueDiez(12) )
// console.log (mayorQueVeinte(15) )

// ESTO DE ARRIBA NO LO USAMOS MUCHO EN EL CURSO




// const numeros = [1 , 23, 44, 65, 92, 32, 87, 123]

// for (const num of numeros) {


//     console.log(num)
// }

// for (const num of numeros) {


//     console.log(num * num)
// }







// RECIBIR FUNCIONES POR PARAMETRO

// const numeros = [1 , 23, 44, 65, 92, 32, 87, 123]
// const nombres = ["Manuel", "Silvestre", "Joaquin"]



// const porCadaUno = (array, fn) => {

//     for (let element of array) {
//         fn(element)
//     }
// }


// porCadaUno(nombres, alert)
// porCadaUno(nombres, console.log)



// numeros.forEach( (el) => {
//     console.log("Elemento del array: " + el)
// })

// nombres.forEach( (nombre) => {
//     console.log("Nombre: " + nombre)
// })






// DUPLICAR NUMEROS EN CONSOLE LOG
// const duplicar = (num) => {
//     console.log(num * 2)
// }


// numeros.forEach(duplicar)
// porCadaUno(numeros, duplicar)



// let total = 0 //variable empieza en 0

// const acumular = (num) => {
//     total += num 
// }

// porCadaUno(numeros, acumular)

// console.log(total)



// porCadaUno(numeros, (num) => {
//     console.log(num * 3)
// })



// const duplicados = []

// porCadaUno(numeros, (num) => {
//     duplicados.push(num * 2)
// })

// console.log(duplicados)


// class Mascota {
//     constructor(nombre, tipo, edad){
//         this.nombre = nombre
//         this.tipo = tipo
//         this.edad = edad
//     }

//     cumplirAnios(){
//         this.edad += 1
//     }

// }


// const mascotas = []

// mascotas.push( new Mascota('Pancho', 'perro', 5))
// mascotas.push( new Mascota('Chispita', 'vizcacha', 15))
// mascotas.push( new Mascota('Varifo', 'vizcacha', 19))
// mascotas.push( new Mascota('Turuko', 'vizcacha', 13))
// mascotas.push( new Mascota('Biko', 'lionking', 202020))
// mascotas.push( new Mascota('Totina', 'pichona', 12))


// mascotas.forEach( (mascotina) => {
//     mascotina.cumplirAnios()
// })


// console.log(mascotas)

// const resultado = mascotas.find ( (mascotina) => mascotina.nombre === "Biko")

// console.log(resultado)

// const vizcachas = mascotas.filter( (el) => {
//     return (el.tipo === "vizcacha" && el.edad > 12)
// })

// console.log(vizcachas)

// const vizcachas = mascotas.filter((el) => el.tipo === "vizcacha" && el.edad > 12)

// console.log (vizcachas)




// const arrayProductos = [
//     {nombre: "Remera", precio: 1000},
//     {nombre: "Remera", precio: 2000},
//     {nombre: "Remera", precio: 2500},
//     {nombre: "Pantalon", precio: 3000},
//     {nombre: "Pantalon", precio: 5000},
//     {nombre: "Pantalon", precio: 4300},
//     {nombre: "Pantalon", precio: 7600},
//     {nombre: "Zapatillas", precio: 18000},
//     {nombre: "Zapatillas", precio: 17000},
//     {nombre: "Zapatillas", precio: 16000},
//     {nombre: "Buzo", precio: 9000},
//     {nombre: "Buzo", precio: 10000},
//     {nombre: "Buzo", precio: 11000},
// ]

// const baratos = arrayProductos.filter( (prod) => prod.precio <= 5000)

// console.log(baratos)

// const prodFiltrados = arrayProductos.filter ( (prod) => prod.nombre !== "Buzo" )

// console.log(prodFiltrados)

// const nombresProd = arrayProductos.map( (prod) => prod.nombre)
// const precioProd = arrayProductos.map( (prod) => prod.precio)


// console.log(nombresProd)
// console.log(precioProd)

// const stockNuevo = arrayProductos.map ( (prod) => {
//     return {
//         nombre: prod.nombre,
//         precio: prod.precio,
//         stock: 100

//     }
// } )

// console.log(stockNuevo)


// const miMap = (array, fn) => {
//     const newArray = []

//     for (const el of array){
//         newArray.push( fn (el) )
//     }

//     return newArray


// }

// const stockNuevo2 = miMap(arrayProductos, (prod) => {
//     return {
//         nombre: prod.nombre,
//         precio: prod.precio,
//         stock: 300

//     }
// })

// console.log(stockNuevo2)


// const cantidadCuotas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log( "La mayor cantidad de cuotas posibles son: " + Math.max(...cantidadCuotas) )
// console.log( "La menor cantidad de cuotas posibles son: " + Math.min(...cantidadCuotas) )
// alert( "La mayor cantidad de cuotas posibles son: " + Math.max(...cantidadCuotas) )
// alert( "La menor cantidad de cuotas posibles son: " + Math.min(...cantidadCuotas) )






// const valores = [66, 33, 2342, 636, 85685, 25235, -22342]

// const miMax = (array) => {
//     let resolv = -Infinity

//     for (const num of array){
//         if (num >= resolv){
//             resolv = num
//         }
//     }

//     return resolv
// }

// console.log( miMax(valores) )






// DOM  

// NOTA 1 : PONER EL SCRIPT AL FINAL DEL BODY PARA QUE FUNCIIONE EL DOM
// PAR4A TODO LO DEMAS VER DOCUMENTACIÓN


// EVENTOS

// const btn1 = document.querySelector('#boton1')
// const btn2 = document.querySelector('#boton2')
// const btn3 = document.querySelector('#boton3')

// // btn1.addEventListener(evento, fn)


// btn1.addEventListener('click', () => {
//     console.log('Botón clickeado')
// })

// btn1.addEventListener('mouseover', () => {      // MEJOR USAR ESTA OPCIÓN
//         console.log('Hover en boton ')
//     })

// btn2.onclick = () => {
//     console.log('Botón 2 clickeado')
// }

// btn3.onclick = () => {
//     alert('Botón 3 clickeado')
// }

// // EJEMPLO DIVERTIDO

// const randomColor = () => {
//     return Math.round( Math.random() * 255)
// }


// const titulo = document.querySelector('#titulo')

// titulo.addEventListener('mouseover', () => {
//     const red = randomColor()
//     const green = randomColor()
//     const blue = randomColor()
//     // console.log(`rgb(${red}, ${green}, ${blue})` )
//     titulo.style.color = `rgb(${red}, ${green}, ${blue}`

// })


// window.addEventListener('click', () => {
//     const red = randomColor()
//     const green = randomColor()
//     const blue = randomColor()

//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`

// })





// FORM

// const inputNombre = document.querySelector('#input-nombre')
// const inputDireccion = document.querySelector('#input-direccion')
// const btnEnviar = document.querySelector('#btn-enviar')

// btnEnviar.addEventListener('click', () => {
//     console.log(inputNombre.value)
//     console.log(inputDireccion.value)
// })


// inputNombre.addEventListener('input', () => {
//     if (inputNombre.value.lenght <= 4) {
//         inputNombre.classList.add('border-danger')
//         inputNombre.classList.remove('border-success')
//     } else {
//         inputNombre.classList.add('border-success')
//         inputNombre.classList.remove('border-danger')
//     }
// })


// inputDireccion.addEventListener('input', () => {
//     if (inputDireccion.value.lenght <= 4) {
//         inputDireccion.classList.add('border-danger')
//         inputDireccion.classList.remove('border-success')
//     } else {
//         inputDireccion.classList.add('border-success')
//         inputDireccion.classList.remove('border-danger')
//     }
// })

