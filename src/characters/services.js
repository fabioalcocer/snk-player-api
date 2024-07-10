const { ObjectId } = require('mongodb');
const { Database } = require('../database/index');

const COLLECTION = 'characters'

const getAll = async () => {
  const collection = await Database(COLLECTION)
  return await collection.find({}).toArray()
}

const getById = async (id) => {
  const collection = await Database(COLLECTION)
  return collection.findOne({ _id: ObjectId(id) })
}

const create = async (character) => {
  const collection = await Database(COLLECTION)
  let result = await collection.insertOne(character)
  return result.insertedId
}

const deleteById = async (id) => {
  const collection = await Database(COLLECTION)
  return collection.deleteOne({ _id: ObjectId(id) })
}

const updateById = async (id, character) => {
  const collection = await Database(COLLECTION)
  return collection.updateOne({ _id: ObjectId(id) }, { $set: character })
}

module.exports.CharactersService = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}