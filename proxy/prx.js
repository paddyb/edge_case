var edge = require('edge'),
    q = require('q')

var getProxy = edge.func({
    assemblyFile: __dirname + '\\bin\\debug\\proxy.dll',
    typeName: 'proxy.DataProxy',
    methodName: 'GetProxy'
})

var proxy = getProxy(null,true)
module.exports.proxy={
    getData: function () {
        return q.Promise(function (resolve, reject) {
            proxy.getData({},
                function (error, result) {
                    if (error)
                        reject(error)
                    else
                        resolve(result)
                })
        })
    }
}
