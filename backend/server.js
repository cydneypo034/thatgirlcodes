const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const path = require("path")


//database connection///
dotenv.config();
const uri = process.env.MONGO_URI
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//middleware//
// app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(express.json());

//origin headers//
//routes//
const communityRoutes = require('../backend/routes/api/community.js');
const resourceRoutes = require('../backend/routes/api/resources.js')
app.use('/api/community', communityRoutes)
app.use('/api/resources', resourceRoutes)


//port//
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
