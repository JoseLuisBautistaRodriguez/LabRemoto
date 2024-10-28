<<<<<<< HEAD
<script lang="ts">
	import VideoStreamPlayer from '$lib/components/VideoStreamPlayer.svelte';
	import LoginRequiredModal from '$lib/components/LoginRequiredModal.svelte';
	import { url, streamURL, streamKey } from '$lib/config';
	import { pb } from '$lib/pb/pocketbase.svelte';
	import { fade } from 'svelte/transition';

	let params = $state<number[]>([]);
	let p = $state(0);
	let q = $state(0);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		params.push(p);
		params.push(q);
		const formData = new URLSearchParams();
		formData.append('params', p);
		formData.append('params', q);
		params = [];

		try {
			const response = await fetch(url + '/api/execute', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: formData
			});

			if (response.ok) {
				// Crear un objeto Blob a partir de la respuesta
				const blob = await response.blob();

				// Crear una URL de objeto a partir del Blob
				const url = URL.createObjectURL(blob);

				// Crear un enlace temporal para la descarga
				const a = document.createElement('a');
				a.href = url;
				a.download = 'data.mat'; // Nombre del archivo para descargar
				document.body.appendChild(a);
				a.click();

				// Limpiar el enlace temporal y revocar la URL de objeto
				document.body.removeChild(a);
				URL.revokeObjectURL(url);

				console.log('Archivo descargado con éxito.');
			} else {
				console.error('Error en la respuesta:', response.statusText);
			}
		} catch (error) {
			console.error('Error en la solicitud:', error);
		}
	}
</script>

<div class="pico container">
	{#if !pb.isLoggedIn()}
		<dialog open={!pb.isLoggedIn()} transition:fade>
			<LoginRequiredModal />
		</dialog>
	{/if}
</div>

<div class="pico container">
	<article>
		<header>
			<h1>Laboratorio</h1>
		</header>

		<div class="grid">
			<div>
				<VideoStreamPlayer {streamURL} {streamKey} />
			</div>
			<form onsubmit={handleSubmit}>
				<label>
					Valor para p
					<input type="number" bind:value={p} min="0" max="10" />
				</label>
				<label>
					Valor para q
					<input type="number" bind:value={q} min="20" max="100" />
				</label>
				<button type="submit">Enviar</button>
			</form>
		</div>
	</article>
</div>
=======
<script lang="ts">
	import VideoStreamPlayer from '$lib/components/VideoStreamPlayer.svelte';
	import { streamURL, streamKey } from '$lib/config';

	let width = $state(0);
	let height = $state(0);
	let text = $state('');
	let color = $state('#ff9500');
	let img = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		const formData = new URLSearchParams();
		formData.append('width', String(width));
		formData.append('height', String(height));
		formData.append('text', text);
		formData.append('bgcolor', color);

		try {
			const response = await fetch('/api/execute', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: formData.toString()
			});

			if (response.ok) {
				// Leer el archivo de imagen como un blob
				const blob = await response.blob();

				// Crear una URL de objeto a partir del blob
				img = URL.createObjectURL(blob);
			} else {
				console.error('Error en la respuesta:', response.statusText);
			}
		} catch (error) {
			console.error('Error en la solicitud:', error);
		}
	}
</script>

<div class="pico container">
	<article>
		<header>
			<h1>Laboratorio</h1>
		</header>

		<div class="grid">
			<div>
				<VideoStreamPlayer {streamURL} {streamKey} />
				{#if img}
					<img src={img} alt="Imagen generada en el servidor" />
				{/if}
			</div>
			<form onsubmit={handleSubmit}>
				<input type="text" bind:value={text} placeholder="Texto" />

				<label for="color">Color <input type="color" bind:value={color} required /></label>

				<label>
					Width
					<input type="range" bind:value={width} min="500" max="2000" required />
				</label>

				<label>
					Height
					<input type="range" bind:value={height} min="500" max="2000" required />
				</label>

				<button type="submit">Enviar</button>
			</form>
		</div>
	</article>
</div>
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4
