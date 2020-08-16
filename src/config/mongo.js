const MongoClient = require("mongodb").MongoClient;
const { MongoSetting } = require("./mongo.config");

module.exports = {
  async db() {
    const mongoClient = await MongoClient.connect(MongoSetting.url, {
      useUnifiedTopology: true
    });
    const db = mongoClient.db("simple-form");
    return db;
  }
};
