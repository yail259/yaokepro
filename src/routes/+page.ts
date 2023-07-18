export async function load() {
    const allPosts = import.meta.glob('../../static/*.md');   

    let postPaths = [];
    for (const [key, value] of Object.entries(allPosts)) {
        const postPath = key.split('/').pop()?.split('.')[0];
        postPaths.push(postPath);
    }

    return {
        postPaths
    };    
}