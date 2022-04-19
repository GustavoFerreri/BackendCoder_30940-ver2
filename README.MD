# RestApi
## _Desafio CoderHouse_

Desarrollado en node js

### Librerias utilizadas

 - uuid - para generacion de id unica
 - lowdb - para gestionar db json
 - express
 - nodemon

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

### Consultas

Ademas del material de clases, y de los videos de clases, se utilizo:
https://github.com/typicode/lowdb
https://www.youtube.com/watch?v=5KjLpaZW4s8
https://www.npmjs.com/package/lowdb
https://www.npmjs.com/package/uuid
https://stackoverflow.com/

### Routes
>Para obtener todos los registros
> ```get /product```
> Para buscar un registro particular_
> ```get /product/:id```
> _Para crear un producto_
> ```post /product```
> _Para actualizar un registro_
> ```put /product/:id```
> _Para eliminar un registro_
> ```delete /product/:id```

### Formato de Json para carga en postman

{
    "title": "lord of the ring",
    "price": "125",
    "img": "img",
    "description": "Pelicula fantastica"
}

####
```sh
https://localhost:8080/api/
```
