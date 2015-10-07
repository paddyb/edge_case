var edge_test = require('./proxy/prx')
var express = require('express')
var q=require('q')

var app = express()
app.get('/',function(req,res){
    edge_test.proxy.getData()
    .then(function(data){
        res.send(JSON.stringify(data))
    })
    .fail(function(err){
        res.status(500).send(err.message)
    })
})

app.listen(3030,function(){
    console.log('listening@3030')
})
