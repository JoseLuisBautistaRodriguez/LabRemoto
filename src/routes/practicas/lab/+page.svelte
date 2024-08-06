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
