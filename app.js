const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/oyebnb";

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}
app.get("/", (req, res) => {
    res.send("Hii I am ALok");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My new Villa",
        description: "buy with all city",
        price: 5000,
        location: "Azamgarh",
        country: "India",
    });

    await sampleListing.save();
    console.log("Sample listing Saved");
    res.send("Successful Testing Done");
})

app.listen(3000, () => {
    console.log("Server is starting on port 3000");
});  