migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69lzafsqi4w5j82")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69lzafsqi4w5j82")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
