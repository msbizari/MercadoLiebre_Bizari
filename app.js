const express = require ('express');
const path = require ('path');
const app = express ();

/*path1 = path.resolve("user/admin", "readme.md");
console.log(path1)*/


//Para qué era el express.static? para que las imagenes se vean

app.use(express.static('./public'));

// para probar si estoy invocando bien la ruta, antes de hacer el app.get puedo probar la ruta con un console.log:
//console.log (path.resolve ('./views/home.html'));
app.get ('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
    });

app.get ('/home', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('servidor corriendo en el puerto 3000');
});        