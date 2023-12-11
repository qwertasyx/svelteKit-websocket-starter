import { Server } from 'socket.io';

export const backend = (server: any) => {
	console.log(`This is the backend`);

	const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(
		server,
		{}
	);

	io.on('connection', (socket) => {
		console.log('someone connected');
		socket.on('ping', (callback) => {
			// response is always somethin between 10 and 100 ms
			setTimeout(
				() => {
					callback(new Date());
				},
				10 + Math.random() * 90
			);
		});
	});
};
