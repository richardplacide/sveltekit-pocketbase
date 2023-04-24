import PocketBase from 'pocketbase';


export async function load() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    //const authData = await pb.collection('users').authWithPassword('svelteuser', 'svelte23');
    const blog_records = await pb.collection('blog_for_sveltekit1_posts').getFullList(200 /* batch size */, {
    sort: '-created',
    })
    .catch((error) => {
        return {
            error
        }
      });

    //getList(1, 50
    const poststListPaginated = await pb.collection('blog_for_sveltekit1_posts').getFullList(200, {
        filter: 'type = "post"',
        sort: '-created',
    });
    
    return {
        all_records: blog_records,
        posts_only: poststListPaginated

    }
}
