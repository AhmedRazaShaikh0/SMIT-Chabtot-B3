import { MongoClient } from "mongodb";

const mongoURL =
  "mongodb+srv://ahmedraza:ahmedraza12345@cluster0.ykj1f2q.mongodb.net/Products";

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();
    console.log("Connected to MongoDB");

    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

export default connectDB;
