const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mernauth', {
    useNewUrlParser: true, useUnifiedTopology: true
}, () => {
    console.log("Successfully connected to the mernauth database!");
});

app.listen(8080, () => {
    console.log("Welcome to MERN-Auth! You've created a server using Express. The server has started and is now listening on port 3000...");
});