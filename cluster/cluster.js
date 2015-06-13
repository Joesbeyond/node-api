var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log("master start...");

    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('listening',function(worker,address){
        console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(0);//端口0进行监听的时候即是随即端口号
}
/*
大家都知道nodejs是一个单进程单线程的服务器引擎，不管有多么的强大硬件，只能利用到单个CPU进行计算。
所以，有人开发了第三方的cluster，让node可以利用多核CPU实现并行。
随着nodejs的发展，让nodejs上生产环境，就必须是支持多进程多核处理！
在V0.6.0版本，Nodejs内置了cluster的特性。
自此，Nodejs终于可以作为一个独立的应用开发解决方案，映入大家眼帘了。*/

/*执行结果 其中worker代表子进程
listening: worker 4335, Address: 0.0.0.0:50957
listening: worker 4336, Address: 0.0.0.0:50957
listening: worker 4339, Address: 0.0.0.0:50957
listening: worker 4337, Address: 0.0.0.0:50957
joes@joes-beyond ~/NodeAPI/cluster $ node cluster.js
master start...
listening: worker 4350, Address: 0.0.0.0:39432
listening: worker 4351, Address: 0.0.0.0:39432
listening: worker 4353, Address: 0.0.0.0:39432
listening: worker 4354, Address: 0.0.0.0:39432
*/
