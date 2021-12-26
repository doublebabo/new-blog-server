const express = require('express')
var app = express();
const {createServer} = require("http");
const {Server} = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */});
const CommonService = require('./services/CommonService');
io.engine.on("headers", (headers, req) => {
    headers["Access-Control-Allow-Origin"] = "*";
});
const commonService = new CommonService();
io.on("connection", (socket) => {
    console.log(socket)
    socket.on('addUser', (ev) => {
        commonService.addNewVisitor({ip: ev.ip, location: ev.location});
        if (ev.username === 'anonymous') {
            ev.username = `${ev.ip} 来自 ${ev.location}`
        }
        io.emit('gTalk', {text:`${ev.username} 加入了房间`, time: new Date().getTime(), username: socket.id})
        io.emit('userList', io.of('/').sockets.size);
    })
    socket.on('chart:message', (ev) => {
        if (ev.username === 'anonymous') {
            ev.username = `${ev.ip} 来自 ${ev.location}`
        }
        socket.broadcast.emit('chart:message', {text: ev.text, time: new Date().getTime(), username: ev.username});
        io.emit('userList', io.of('/').sockets.size);
        // socket.broadcast.emit('clientMsg', {text: ev.text, time: new Date().getTime(), username: ev.username})
    })

    socket.on("disconnect", (reason) => {
        console.log(reason)
        // ...
    });
})

io.engine.on("connection_error", (err) => {
    console.log(err.req);      // the request object
    console.log(err.code);     // the error code, for example 1
    console.log(err.message);  // the error message, for example "Session ID unknown"
    console.log(err.context);  // some additional error context
});

httpServer.listen(4000, function () {
    console.log('Websocket Ready')
})
