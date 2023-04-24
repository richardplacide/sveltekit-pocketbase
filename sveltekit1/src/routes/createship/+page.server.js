/** @type {import('./$types').Actions} */


import PocketBase from 'pocketbase';

export const actions = {
    default: async ({request}) => {
        const pb = new PocketBase('http://127.0.0.1:8090');

        const data = await request.formData();
        
        const data2 = {
            "name": data.get("name"),
            "class": data.get("class"),
            "type": data.get("test"),
            "cost_index": data.get("cost_index")
        };

        const record = await pb.collection('ships').create(data).catch((err) => {
            if (!err) {
                
            }
        });
        console.log(record);
        }
  };