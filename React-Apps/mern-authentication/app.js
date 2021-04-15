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

const userRouter = require('./routes/User');
app.use('/user', userRouter);


app.listen(8080, () => {
    console.log("Welcome to MERN-Auth! You've created a server using Express. The server has started and is now listening on port 8080...");
});

// const User = require('./models/User');
// const userInput = {
//     username: "yun",
//     password: "pasword",
//     role: "admin"
// }

// const user = new User(userInput);
// user.save((err, document) => {
//     if (err) {
//         console.log(err);
//     }
//     // console.log(document);
// });