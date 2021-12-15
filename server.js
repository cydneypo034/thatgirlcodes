const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");


//database connection///
dotenv.config();
const url = process.env.REACT_APP_MONGO_URL
const connectDB = async () => {
    try {
        await mongoose.connect(
            url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
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

//middleware//
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//origin headers//
//routes//
const ladyRoutes = require('./routes/api/ladies.js');
const resourceRoutes = require('./routes/api/resources.js')
app.use('/api/ladies', ladyRoutes)
app.use('/api/resources', resourceRoutes)

//image storage//
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

//port//
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
