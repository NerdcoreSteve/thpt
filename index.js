var express = require('express')  
var app = express()  
app.set('view engine', 'pug')

app.get('/', function (req, res) {  
    res.render(
        'index',
        { title: 'What?', message: 'Yo Yo'})
})

app.listen(5000, function () {  
    console.log('thpt listening on port 5000')
})
