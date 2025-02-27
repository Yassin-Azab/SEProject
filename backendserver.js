//cart model and connection to MongoDB
import express, { json } from "express";
import { connect, connection } from "mongoose";
const mongoose = require ('mongoose');

import { config } from "dotenv";
import cors from "cors";
import userModel from "./routes/userModel";
import eventModel from "./routes/eventModel";
import bookingModel from "./routes/bookingModel";

//const connectDB = require("./db");
import connectDB from "./db";



config();
const app = express();
const mongoURI = "mongodb+srv://Yassin:uagae@cluster0.n8gtz.mongodb.net/"; // Your actual DB name

async function listCollections() {
  try {
    // Connect to MongoDB
    await connect(mongoURI);
    console.log("✅ MongoDB Connected!");

    // Get collection names
    const collections = await connection.db.listCollections().toArray();
    
    console.log("📂 Collections in Database:");
    collections.forEach((collection) => console.log(`- ${collection.name}`));

  } catch (error) {
    console.error("Error:", error);
  } finally {
    connection.close();
    console.log("Connection closed.");
  }
}

listCollections();

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

// Connect to MongoDB
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const ticketingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: [true, "User already has a ticket"],
  },
  products: [
    {
      productId: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1
    },
}]
}, {

timestamps: true,
})

const cartModel = mongoose.model("cart", ticketingSchema);
module.exports = cartModel;


dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

MONGO_URI=mongodb//localhost:27017/SEDatabase 
PORT=5000