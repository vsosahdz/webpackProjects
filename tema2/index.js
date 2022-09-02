//importar las bibliotecas
const express = require('express');
const path = require('path');

const app = express();

//middleware
app.use(express.static(path.join(__dirname,'public')));
//Definición de nuestra aplicación
app.get('/bigote',(request,response)=>{
    console.log('Hola mundo');
    response.send('<h1>Hola mundo</h1>');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})
//Prueba query
app.get('/prueba1',(req,res)=>{
    console.log(req.query);
    res.send("Datos enviados por query "+req.query.name);
});

//Prueba params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send("Datos enviados por params "+ req.params.name);
})

//Lanzar la aplicación
app.listen(8080,()=>{
    console.log("Servidor en línea");
});