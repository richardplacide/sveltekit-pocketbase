migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69lzafsqi4w5j82")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mg8asajj",
    "name": "type",
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
    "id": "e67lkgu6",
    "name": "cost_index",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mvh2f3nb",
    "name": "class",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69lzafsqi4w5j82")

  // remove
  collection.schema.removeField("mg8asajj")

  // remove
  collection.schema.removeField("e67lkgu6")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
