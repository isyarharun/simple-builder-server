const mongo = require("../../config/mongo");
const ObjectId = require("mongodb").ObjectId;
module.exports = {
  async saveForm(params) {
    const db = await mongo.db();
    const coll = db.collection("simple-form");
    const response = await coll.insertOne(params);
    return response;
  },
  async get(id) {
    const db = await mongo.db();
    const coll = db.collection("simple-form");
    const result = await coll.findOne(ObjectId(id));
    return result;
  },
  async getAll(params) {
    const db = await mongo.db();
    const coll = db.collection("simple-form");
    const result = await coll.find();
    return result;
  },
  async submitForm(params) {
    const db = await mongo.db();
    const coll = db.collection("responses");
    await coll.insertOne(params);
  },
  async getResponses(id) {
    const db = await mongo.db();
    const coll = db.collection("responses");
    const query = { id };
    const result = await coll.find(query).toArray();
    return result;
  }
};
