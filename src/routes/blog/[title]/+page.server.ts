import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
// import { PageServerLoad } from './$types.js';

export async function load({ fetch, params }) {
    const contentResponse = await fetch(`/${params.title}.md`);   

    if (contentResponse.status === 404) {
        console.log("No such blog post");
        throw error(404, 'No such blog post');
    }

    const content = await contentResponse.text();    
    const compiled = await compile(content);

    return {
        content: compiled
    };    
}