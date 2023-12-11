import { io, Socket } from 'socket.io-client';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export let socket: Socket<ServerToClientEvents, ClientToServerEvents>;
export const connected: Writable<boolean> = writable(false);

export const createSocket = () => {
	socket = io();

	socket.on('connect', () => {
		connected.set(true);
		console.log('connected');
	});

	socket.on('disconnect', () => {
		connected.set(false);
		console.log('disconnected');
	});
};
