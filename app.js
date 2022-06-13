
//Constuctor de clientes

class cliente {
    constructor(id, nombre, dni, edad, prestamo, cuotas){
        this.id = id
        this.nombre = nombre
        this.dni = dni
        this.edad = edad
        this.prestamo = prestamo
        this.cuotas = cuotas
    }
}

const clientes = []

clientes.push( new cliente('1', 'Manuel', 30231091, 35, 30000, 6))
clientes.push( new cliente('2', 'Joaquin', 41632641, 25, 70000, 12))
clientes.push( new cliente('3', 'Ramon', 37232094, 27, 120000, 3))
clientes.push( new cliente('4', 'Sofia', 21231091, 55, 1500000, 5))
clientes.push( new cliente('5', 'Maria', 49891021, 20, 1221000, 9))
clientes.push( new cliente('6', 'Juan', 1133068, 75, 65000, 2))
clientes.push( new cliente('7', 'Josefina', 27095437, 44, 350000, 10))
clientes.push( new cliente('8', 'Sebastian', 34987456, 29, 535000, 12))
clientes.push( new cliente('9', 'Camila', 27234999, 37, 96000, 6))
clientes.push( new cliente('10', 'Changuito', 990121, 97, 12430000, 1))

console.log(clientes)


   
    //Funcion para ingresar nombre del cliente
    function nombre1(){
    let nombre1 = (prompt("Usted ha ingresado en la sección de prestamos, ingrese su nombre para continuar"));
    alert("Gracias por elegirnos" + " " + nombre1)
    return nombre1
    }

    //Funcion para ingresar DNI del cliente
    function dni1(){
        let dni1 = parseInt(prompt("Por favor ingrese su numero de DNI"));
        alert("El DNI ingresado es" + " " + dni1)
        return dni1
        }

    function edad1(){
            let edad1 = parseInt(prompt("Por favor ingrese su edad"));
            while(edad1 < 18){
                alert("Debe ser mayor de edad para solicitar un préstamo")
                edad1 = parseInt(prompt("Por favor ingrese su edad"));
            }
            alert("El dato ingresado es:" + " " + edad1 + " " + "años de edad")
            return edad1
    }


    //Funcion para ingresar monto del prestamo
    function cantidad1(){
        let cantidad1 = parseInt(prompt("A continuación ingrese el monto del prestamo a solicitar"));
        alert("La cantidad es = " + cantidad1)
        return cantidad1
    }

    //Funcion para ingresar cuotas a pagar
    function cuotas1(){
        let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
        while( cuotas1 > 12){
            alert("Debe elegir una cantidad del 1 al 12")
            cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
        }
        alert("Desea el prestamo en " + cuotas1 + " cuotas?")
        return cuotas1
    }

    //Capturar resultado de funciones
    let nombre = nombre1()
    let dni = dni1()
    let edad = edad1()
    let prestamo = cantidad1()
    let cuotas = cuotas1()
    
   

    //Mostrar resultado de funciones
    console.log("Nombre del cliente: " + nombre)
    console.log("DNI del cliente: " + dni)
    console.log("Edad del cliente: " + edad)
    console.log("Monto del préstamo: " + prestamo)
    console.log("Cantidad de cuotas:" + cuotas)

    //Funcion para dividir cantidad en cuotas
    function dividir(dato1, dato2){
       let resultado = dato1 / dato2;
       return resultado
    }

    //Capturar cantiddad / cuotas
    let division = dividir(prestamo, cuotas)

    //Mostrar resultado
    console.log("El cliente " + nombre + " de " + edad + " años de edad, DNI: "+ dni + " solicita el préstamo:" + cuotas + " cuotas de " + division)
    alert("El cliente " + nombre + " de " + edad + " años de edad, DNI: "+ dni + " solicita el préstamo: " + cuotas + " cuotas de " + division)


//High order functions

//Busco prestamos mayores a cierto monto de clientes menores a cierta edad
const prestamosDeRiesgo = clientes.filter ( (el) => {
    return (el.edad <= 30 && el.prestamo >= 500000)
})

console.log (prestamosDeRiesgo)


//Quiero saber cual es la mayor cantidad de cuotas posibles
const cantidadCuotas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log( "La mayor cantidad de cuotas posibles son: " + Math.max(...cantidadCuotas) )