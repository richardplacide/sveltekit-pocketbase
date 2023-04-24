migrate((db) => {
  const collection = new Collection({
    "id": "jo0pjzjowcxt3cf",
    "created": "2023-04-24 14:51:59.679Z",
    "updated": "2023-04-24 14:51:59.679Z",
    "name": "blog_for_sveltekit1_posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c5gjjpwt",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "post",
            "page"
          ]
        }
      },
      {
        "system": false,
        "id": "nrl2nay6",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "blvv0q88",
        "name": "summary",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2wqt7fwl",
        "name": "content",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "pzaxkrfc",
        "name": "image_thumbnail",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "zoq63tqr",
        "name": "tags",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jo0pjzjowcxt3cf");

  return dao.deleteCollection(collection);
})
