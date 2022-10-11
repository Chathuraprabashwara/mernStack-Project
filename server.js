const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//import routees
const postRoutes = require('./routes/posts');


//app midleware
app.use(bodyParser());
app.use(cors());
//route midleware
app.use(postRoutes);

const PORT =8000;
const DB_URL ='mongodb+srv://chathura:chathura123@mernapp.948siii.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB connected");
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`app is runnig on ${PORT}`)
})