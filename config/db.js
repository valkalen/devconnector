const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoUri');

const connectDb = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDb Connected...');
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDb;
