import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://mgasca12:chapito12@cluster0.4uko3fj.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${db.connection.host}:${db.conecction.port}`;
    console.log(`MongoDB conectado en: ${url} `);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
