migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69lzafsqi4w5j82")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69lzafsqi4w5j82")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
