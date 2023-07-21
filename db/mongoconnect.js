const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.w4h7n1o.mongodb.net/plants`);
  console.log("mongo connect plants DB 555")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}