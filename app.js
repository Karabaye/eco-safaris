const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const path = require('path');





app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())



const formRoute = require('./routes/form')

app.use('/api', formRoute)

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, ()=>{
    console.log('the server has started');
})