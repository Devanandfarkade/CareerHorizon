import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URL);
    console.log(
      `Connected to mongodb ${mongoose.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Mongodberror ${error}`.bgRed.white);
  }
};

export default connectDB;
