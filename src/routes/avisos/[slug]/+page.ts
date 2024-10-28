<<<<<<< HEAD:src/routes/posts/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { slug: string } }) {
	try {
		const post = await import(`$lib/posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
=======
import { error } from '@sveltejs/kit'

export async function load({ params }: { params: { slug: string } }) {
    try {
        const post = await import(`$lib/avisos/${params.slug}.md`)

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        error(404, `Could not find ${params.slug}`)
    }
}
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4:src/routes/avisos/[slug]/+page.ts
