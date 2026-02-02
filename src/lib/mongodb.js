"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable");
}
var client;
var clientPromise;
if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new mongodb_1.MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
}
else {
    client = new mongodb_1.MongoClient(uri);
    clientPromise = client.connect();
}
clientPromise.then(function () { return console.log("✅ MongoDB connected successfully"); });
exports.default = clientPromise;
