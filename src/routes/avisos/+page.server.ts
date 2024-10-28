<<<<<<< HEAD:src/routes/posts/+page.server.ts
import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}
=======
import type { Post } from '$lib/types'

export async function load({ fetch }) {
    const response = await fetch('api/avisos')
    const posts: Post[] = await response.json()
    return { posts }
}
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4:src/routes/avisos/+page.server.ts
