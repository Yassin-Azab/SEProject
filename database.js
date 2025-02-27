const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://Yassin:uagae@cluster0.n8gtz.mongodb.net/"; // Your actual DB name

async function listCollections() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected!");

    // Get collection names
    const collections = await mongoose.connection.db.listCollections().toArray();
    
    console.log("📂 Collections in Database:");
    collections.forEach((collection) => console.log(`- ${collection.name}`));

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    mongoose.connection.close();
    console.log("🔌 Connection closed.");
  }
}

listCollections();
