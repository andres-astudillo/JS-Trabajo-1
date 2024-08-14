let condicion = false;
let producto= [];
do {
    let respuesta = prompt('Querés ingresar un nuevo producto?')
    if(respuesta.toLowerCase() === 'si'){
        producto = prompt('Ingresa un producto para inventariar');
    } else {
        condicion = false;
    }
} while (condicion);