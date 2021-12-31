const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const path = require("path")


//database connection///
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

//middleware//
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//origin headers//
//routes//
const communityRoutes = require('./routes/api/community.js');
const resourceRoutes = require('./routes/api/resources.js')
app.use('/api/community', communityRoutes)
app.use('/api/resources', resourceRoutes)

/////////////heroku build///////////// place this last!

//__dirname = path.resolve();
//heroku static folder
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get('*',(req, res) => {
        res.sendFile(path.join(__dirname, 'client' , 'build', 'index.html'));
        //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    })
}else {
    app.get("/", (req, res) => {
        res.send("API is running..")
    })
}

//port//
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
