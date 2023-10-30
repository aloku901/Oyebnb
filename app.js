const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.send("Hii I am ALok");
});

app.listen(3000, () => {
    console.log("Server is starting on port 3000");
});  