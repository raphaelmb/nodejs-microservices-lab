// import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";

// let mongo: any;
let mongoUri = "mongodb://localhost:27017/test";
// let mongoUri = "mongodb://root:root@localhost:27017/test";
jest.setTimeout(100000);

beforeAll(async () => {
  // mongo = await MongoMemoryServer.create();
  // const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  // await mongo.stop();
  await mongoose.connection.close();
});
