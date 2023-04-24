import PocketBase from 'pocketbase';


export async function load() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    //const authData = await pb.collection('users').authWithPassword('svelteuser', 'svelte23');
    const ship_records = await pb.collection('ships').getFullList(200 /* batch size */, {
    sort: '-created',
    })
    .catch((error) => {
        return {
            error
        }
      });
    
    return {
        ships: ship_records
    }
}



