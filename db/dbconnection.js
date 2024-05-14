import mongoose from 'mongoose';

/**
 * Function to connect to the MongoDB database.
 *
 * @return {Promise} - A promise that resolves when the connection is successful.
 *                     Rejects with an error message if the connection fails.
 */
const ConnectToDB = async () => {
  // Attempt to connect to the MongoDB database
  try {
    await mongoose
      .connect(process.env.DB_CONNECTION);
    // Log a success message if the connection is successful
    console.log("Connected Successfully");
  } catch {
    // Log an error message if the connection fails
    console.error('DB connection failed!!!');
  }
};



export default ConnectToDB

