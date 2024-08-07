<script lang="ts">
	import { formatDate } from '$lib/utils';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<!-- Posts -->
<section class="pico container">
	<article>
		<section class="container">
			<ul class="list-disc">
				{#each data.posts as post}
					<li>
						<h2><a href={'/avisos/' + post.slug} class="title">{post.title}</a></h2>
						<div class="grid">
							<p class="date">{formatDate(post.date)}</p>
							<p class="description">{post.description}</p>
						</div>
					</li>
				{/each}
			</ul>
		</section>
	</article>
</section>
