const mongoose = require("mongoose");
const initdata = require("./data");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/oyebnb";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "6569645fa9e81cff4db462a0",
  }));
  await Listing.insertMany(initdata.data);
  console.log("Data was Initialized");
};

initDB();
