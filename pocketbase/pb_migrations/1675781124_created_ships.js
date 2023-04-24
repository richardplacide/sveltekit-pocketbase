migrate((db) => {
  const collection = new Collection({
    "id": "69lzafsqi4w5j82",
    "created": "2023-02-07 14:45:24.819Z",
    "updated": "2023-02-07 14:45:24.819Z",
    "name": "ships",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "la9dqikp",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mvh2f3nb",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "frigate",
            "destroyer",
            "cruiser",
            "battlecruiser",
            "battleship"
          ]
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
  const collection = dao.findCollectionByNameOrId("69lzafsqi4w5j82");

  return dao.deleteCollection(collection);
})
