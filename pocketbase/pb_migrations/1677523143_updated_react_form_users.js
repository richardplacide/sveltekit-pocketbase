migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("locl9xfcqsczfoq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cs64zjio",
    "name": "city",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxsgyqzb",
    "name": "state",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bvzazoys",
    "name": "zip",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n6vitjxd",
    "name": "email",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gsrmnnsi",
    "name": "password",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("locl9xfcqsczfoq")

  // remove
  collection.schema.removeField("cs64zjio")

  // remove
  collection.schema.removeField("sxsgyqzb")

  // remove
  collection.schema.removeField("bvzazoys")

  // remove
  collection.schema.removeField("n6vitjxd")

  // remove
  collection.schema.removeField("gsrmnnsi")

  return dao.saveCollection(collection)
})
