import { connect } from 'mongoose';

const BaseURL = process.env.BASE_URL

const connectDB = async () => {
  try {
    await connect('mongodb+srv://ahmedraza:ahmedraza12345@cluster0.ykj1f2q.mongodb.net', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export default connectDB;