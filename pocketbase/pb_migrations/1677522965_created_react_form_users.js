migrate((db) => {
  const collection = new Collection({
    "id": "locl9xfcqsczfoq",
    "created": "2023-02-27 18:36:05.326Z",
    "updated": "2023-02-27 18:36:05.326Z",
    "name": "react_form_users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zeewetex",
        "name": "firstname",
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
        "id": "dieeofyj",
        "name": "last_name",
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
        "id": "uhal2lbo",
        "name": "age",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ewjvca1v",
        "name": "street",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("locl9xfcqsczfoq");

  return dao.deleteCollection(collection);
})
