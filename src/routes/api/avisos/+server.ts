<<<<<<< HEAD:src/routes/api/posts/+server.ts
import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types.ts';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('$lib/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
=======
import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types.ts'

async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('$lib/avisos/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post
            post.published && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4:src/routes/api/avisos/+server.ts
