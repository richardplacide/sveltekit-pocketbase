import PocketBase from 'pocketbase';


export async function load(params) {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const record = await pb.collection('blog_for_sveltekit1_posts').getOne('${params.postid}', {
        
    })
    .catch((error) => {
        return {
            error
        }
      });

    
    return {
        post: record,
       

    }
}
