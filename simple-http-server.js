const net = require('net')

const server = net.createServer(function(socket) {
    console.log('server connected');
    socket.on('end', function() {
      console.log('server disconnected');
    });
    socket.setEncoding('utf8')

    socket.on('data', function(data) {
        console.log(data);
        socket.write("HTTP/1.1 200 OK\n\nhallo");
        socket.end((err)=>{console.log(err)})
    });

});

server.on('error', (err) => {
    console.error(err);
});

server.listen(500, function() {
    console.log('simple http server listen');
});
