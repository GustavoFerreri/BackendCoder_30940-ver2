const app = require('./src/app');
const { createConnection } = require('./src/database');

const port = process.env.PORT || 8080;

createConnection();
app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})