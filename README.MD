# RestApi
## _Desafio CoderHouse_

Desarrollado en node js

### Librerias utilizadas

 - uuid - para generacion de id unica
 - lowdb - para gestionar db json
 - express
 - nodemon

### Consultas

Ademas del material de clases, y de los videos de clases, se utilizo:
> https://github.com/typicode/lowdb
> https://www.youtube.com/watch?v=5KjLpaZW4s8
> https://www.npmjs.com/package/lowdb
> https://www.npmjs.com/package/uuid
> https://stackoverflow.com/

### Routes
>Para obtener todos los registros
> ```get /product```
> Para buscar un registro particular_
> ```get /product/:id```
> _Para crear un producto_
> ```post /product```
> _Para actualizar un registro_
> ```put /product/:id
{
    "title": "Spiderman",
    "price": "135",
    "img": "img",
    "description": "Pelicula heroe"
}

> _Para eliminar un registro_
> delete /product/:id

### Formato de Json para carga en postman

{
    "title": "lord of the ring",
    "price": "125",
    "img": "img",
    "description": "Pelicula fantastica"
}

### Motor de plantilla
Aplicamos EJS, Handlebars, y Pug, si bien los tres los probe uno me parece similar a python, otro a php, pero con el que mejor me siento es con _handlebars_, al menos con lo que ha aplicando hasta el momento.
Dicho esto se agrega la navegacion entre las dos web que hasta el momento utilizamos.
Por otro lado el contenido esta dentro del framework de Bootstrap, en este caso importado mediante cdn.
Para acceder al mismo basta con entrar a la raiz del server

####
sh
https://localhost:8080/api/
