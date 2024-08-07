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
