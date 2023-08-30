/* Create a geospatial index */

// Import the MongoClient type from the mongodb package.
const { MongoClient } = require("mongodb");

// Replace the placeholders with your MongoDB deployment's credentials.
const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?writeConcern=majority";

// Create a new client and connect to MongoDB.
const client = new MongoClient(uri);

async function run() {
  try {
    // begin-idx
    // Access the movies collection from the sample_mflix database.
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    // Create a 2dsphere index on the "location.geo" field.
    const result = await movies.createIndex({ "location.geo": "2dsphere" });
    
    // Print the result of the index creation.
    console.log(`Index created: ${result}`);
    // end-idx
  } finally {
    // Close the client after the operation completes.
    await client.close();
  }
}
// Run the program and handle any errors that occur during execution.
run().catch(console.dir);
