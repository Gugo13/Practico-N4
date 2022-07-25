function Obtener(obj) {
  //Obtener y Recorrer las Llaves de un Objeto
  //Aqui tu codigo
  for (prop in obj) {
    console.log(prop);
    console.log(obj[prop]);
  }
}
let obj = { nombre: "Juan", apellido: "Perez", edad: 20 };
console.log(Obtener(obj));

function Fecha(num) {
  //Escriba una función de JavaScript para obtener el día de una fecha en particular.
  //Aqui tu codigo  
  let fecha = new Date(num);
  console.log(fecha.getDate());

}
let num = new Date('September 13, 1991 23:15:30');
console.log(Fecha(num));

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  // // Tu código:
  for (prop in usuario) {   
      if (usuario.password == password) {
        return true;
      }else{
        return false;
      }    
  }    
}
let pepito={
  edad:"34",
  dni: "111",
  password:"messirve123"
};
console.log(verificarPassword(pepito, "messirve123"))


function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    }
  };
  return gato;
}
var miGato = crearGato('mojito', 3);
console.log(miGato);

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:  
  producto.calcularPrecioDescuento = function () {
    return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
  } 
  return producto;

  
}
let producto = {
  nombre: "Leche",
  precio: 20,
  porcentajeDeDescuento: 0.2
};
console.log(agregarMetodoCalculoDescuento(producto));

function ordenar(array) {
  // A partir del array pasado por parametros, ordenarlo (ascendente o descendente) de la forma que tu quieras
  // Mostrar array ordenado.
  // Tu código:
  return array.sort();
}
  const array = ['uno', 'dos', 'tres', 'cuatro'];
  console.log(ordenar(array));