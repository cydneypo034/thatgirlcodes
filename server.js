const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config();
const url = process.env.REACT_APP_MONGO_URL
const connectDB = async () => {
    try {
        await mongoose.connect(
            url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        );
        console.log("MongoDB is connected...")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

app.use(cors());