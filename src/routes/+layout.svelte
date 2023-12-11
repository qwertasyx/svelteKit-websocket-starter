<script lang="ts">
	import '../app.css';

	import { createSocket, connected } from '$lib/websocket';
	import { onMount } from 'svelte';

	onMount(() => {
		createSocket();
	});
</script>

{#if $connected}
	<slot />
{:else}
	not connected
{/if}
