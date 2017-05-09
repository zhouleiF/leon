var express = require('express')
var app = express()
var proxy = require('express-http-proxy')

app.use('/jsconsole', proxy('http://localhost:8000/'))
app.use('/weinre', proxy('localhost:8001'))
app.listen(80, function() {
    console.log('Example app listening on port 80!')
})
