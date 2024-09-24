// Arreglo simple de productos
const productos = [
  { nombre: "Camisa", precio: 300 },
  { nombre: "Pantalón", precio: 500 },
  { nombre: "Sombrero", precio: 200 },
  { nombre: "Zapatos", precio: 800 }
];

// Arreglo para el carrito de compras
let carrito = [];

// Menú para mostrar las opciones 
const mostrarMenu = () => {
  return parseInt(prompt(`
      Seleccione un producto para agregar al carrito:
      1. Camisa - $300
      2. Pantalón - $500
      3. Sombrero - $200
      4. Zapatos - $800
      5. Ver Carrito y Total
      6. Salir
      Elige una opción:
  `));
}

// Función para agregar producto al carrito 
// Se usa para agregar el producto elegido al carrito
const agregarProducto = (opcion) => {
  if (opcion >= 1 && opcion <= 4) { // Validamos que la opción sea válida
      let producto = productos[opcion - 1]; // Seleccionamos el producto correcto
      carrito.push(producto); // Lo agregamos al carrito
      console.log(`Producto "${producto.nombre}" agregado al carrito.`);
  } else {
      console.log("Opción no válida.");
  }
}

// Función para ver el contenido del carrito y el total
// Se encarga de mostrar lo que hay en el carrito y calcular el total
const verCarrito = () => {
  if (carrito.length === 0) {
      console.log("El carrito está vacío.");
  } else {
      let total = 0;
      console.log("Carrito de compras:");
      carrito.forEach((producto, index) => {
          console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
          total += producto.precio;
      });
      console.log(`Total: $${total}`);
  }
}

// Función principal para iniciar la tienda 
// Controla el flujo del programa con un bucle
function iniciarTienda() {
  let continuar = true;
  while (continuar) {
      let opcion = mostrarMenu();
      if (opcion >= 1 && opcion <= 4) {
          agregarProducto(opcion); // Agregar producto al carrito
      } else if (opcion === 5) {
          verCarrito(); // Mostrar el carrito
      } else if (opcion === 6) {
          console.log("Saliendo de la tienda...");
          continuar = false; // Finalizar el bucle
      } else {
          console.log("Opción no válida.");
      }
  }
  console.log("Programa finalizado.");
}

// Iniciar el programa de la tienda
iniciarTienda();
