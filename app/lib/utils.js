import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  if (connection.isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw new Error("Database connection failed");
  }
};
