//had to change the Express/Socket.io setup to be a traditional JS setup
//due to an issue with socket.io not finding its auto-route
//will work out later to convert back to TS setup
const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const port = 8080;
app.use(express.static(path.join(__dirname, '/../../client/dist')));
app.use(express.static(path.join(__dirname, '/../../client/', 'node_modules', 'phaser', 'dist')));
app.use(express.static(path.join(__dirname, '/../../client/public')));
app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/../../client/index.html'));
});
io.on('connection', socket => {
    console.log('A client connected!');
});
http.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map