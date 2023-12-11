import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { backend } from './src/server/backend';

export default defineConfig({
	plugins: [
		sveltekit(),

		{
			name: 'socket-io',
			configureServer(server) {
				backend(server.httpServer);
				// const io = require('socket.io')(server.httpServer);
				// io.on('connection', (socket) => {
				//   socket.on('message', (data) => {
				//     console.log(data);
				//   });
				// });
			}
		}
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
