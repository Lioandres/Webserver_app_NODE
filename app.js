require("dotenv").config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port=process.env.PORT

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'))


app.get('/hola_mundo', function (req, res) {
    res.send('Esta es la direccion para el hola mundo')
  })

app.get('/', (req,res)=>{
    res.render('home',{
        title:'curso de Node',
        nombre:'Emilio Lagarrigue'
    })
})

app.get('/generic',(req,res)=>{
    res.render('generic',{
        title:'curso de Node',
        nombre:'Emilio Lagarrigue'
    })

})

app.get('/elements',(req,res)=>{
    res.render('elements',{
        title:'curso de Node',
        nombre:'Emilio Lagarrigue'
    })

})

app.get('/generic', (req,res)=>{
    res.sendFile(__dirname+'/public/generic.html')

})

app.get('/elements', (req,res)=>{
    res.sendFile(__dirname+'/public/elements.html')

})

  app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html')
  })
  
  

app.listen(port,()=>{
    console.log(`express esta corriendo en el puerto ${port}`)
    
})