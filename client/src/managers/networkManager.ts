import * as socketio from 'socket.io-client';

class NetworkManager {
	public io: SocketIOClient.Socket;

	public constructor() {

	}

	public connectUser() {
		this.io = socketio('http://localhost:8080');
	}
}