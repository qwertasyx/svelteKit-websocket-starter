<script lang="ts">
	import '../app.css';

	import { socket } from '$lib/websocket';
	import { onMount } from 'svelte';

	let latency = -1;

	onMount(() => {
		setInterval(() => {
			const now = new Date();
			socket.emit('ping', (serverDate) => {
				latency = new Date(serverDate).getTime() - now.getTime();
			});
		}, 500);
	});
</script>

<h1>Welcome to the Thing</h1>

<div>latency: {latency}</div>
