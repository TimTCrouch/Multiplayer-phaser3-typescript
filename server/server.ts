import express from 'express';
import http from 'http';
import path from 'path';
const app = express();
const port = 8080; // default port to listen

app.use(express.static(path.join(__dirname, '/../../client/dist')));
app.use(express.static(path.join(__dirname, '/../../client/','node_modules', 'phaser', 'dist')));
app.use(express.static(path.join(__dirname, '/../../client/public')));
app.get( "/", ( req, res ) => {
	console.log(__dirname);
	res.sendFile(path.join( __dirname, '/../../client/index.html'));
} );


app.listen( port, () => {
	console.log( `server started at http://localhost:${ port }` );
} );
