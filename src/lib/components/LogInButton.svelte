<<<<<<< HEAD
<script lang="ts">
	import { pb } from '$lib/pb/pocketbase.svelte';
	import { LogIn, LogOut } from 'lucide-svelte';

	async function logOut() {
		pb.logout();
		window.location.href = '/';
	}
</script>

{#if pb.isLoggedIn()}
	<button class="inline-flex items-center" onclick={logOut}>
		<LogOut class="w-4 h-4" />
		<div class="hidden md:block ms-2">Cerrar sesión</div>
	</button>
{:else}
	<a href="/login" class="button">
		<LogIn class="w-4 h-4" />
		<div class="hidden md:block ms-2">Inicia sesión</div>
	</a>
{/if}

<style>
	.button {
		background-color: var(--pico-primary-background);
		color: var(--pico-primary-inverse);
		text-align: center;
		margin: 0;
		display: inline-flex;
		align-items: center;
	}
	.button:hover {
		background-color: var(--pico-secondary-hover-background);
		text-decoration: none;
	}
	button:hover {
		background-color: var(--pico-secondary-hover-background);
		text-decoration: none;
	}
</style>
=======
<script lang="ts">
	import { pb } from '$lib/pb/pocketbase.svelte';
	import { LogIn, LogOut } from 'lucide-svelte';

	async function logOut() {
		pb.logout();
		window.location.href = '/';
	}
</script>

{#if !pb.isLoggedIn()}
	<a href="/login" class="button">
		<LogIn class="w-4 h-4" />
		<div class="hidden md:block ms-2">Inicia sesión</div>
	</a>
{:else}
	<button class="inline-flex items-center" onclick={logOut}>
		<LogOut class="w-4 h-4" />
		<div class="hidden md:block ms-2">Cerrar sesión</div>
	</button>
{/if}

<style>
	.button {
		background-color: var(--pico-primary-background);
		color: var(--pico-primary-inverse);
		text-align: center;
		margin: 0;
		display: inline-flex;
		align-items: center;
	}
	.button:hover {
		background-color: var(--pico-secondary-hover-background);
		text-decoration: none;
	}
	button:hover {
		background-color: var(--pico-secondary-hover-background);
		text-decoration: none;
	}
</style>
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4
