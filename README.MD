# RestApi

### Librerias utilizadas

uuid - para generacion de id unica
lowdb - para gestionar db json
express
nodemon

### Consultas

Ademas del material de clases, y de los videos de clases, se utilizo:
https://github.com/typicode/lowdb
https://www.youtube.com/watch?v=5KjLpaZW4s8
https://www.npmjs.com/package/lowdb
https://www.npmjs.com/package/uuid
https://stackoverflow.com/

### Routes

Para obtener todos los registros
get /product

Para buscar un registro particular
get /product/:id

Para crear un producto
post /product

Para actualizar un registro
put /product/:id

Para eliminar un registro
delete /product/:id

### Formato de Json para carga en postman

{
    "title": "lord of the ring",
    "price": "125",
    "img": "img",
    "description": "Pelicula fantastica"
}

