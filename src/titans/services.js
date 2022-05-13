const { ObjectId } = require('mongodb');
const { Database } = require('../database/index');

const COLLECTION = 'titans'

const getAll = async () => {
  const collection = await Database(COLLECTION)
  return await collection.find({}).toArray()
}

const getById = async (id) => {
  const collection = await Database(COLLECTION)
  return collection.findOne({ _id: ObjectId(id) })
}

const create = async (titan) => {
  const collection = await Database(COLLECTION)
  let result = await collection.insertOne(titan)
  return result.insertedId
}

//TODO update
//TODO delete

module.exports.TitansService = {
  getAll,
  getById,
  create,
}