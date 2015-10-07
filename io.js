var edge_test = require('./proxy/prx')


edge_test.proxy.getData()
.then(function(data){
    console.log(JSON.stringify(data))
})
.fail(function(err){
    console.log(err.message)
})


