// import dotenv from 'dotenv';
// import  express from "express";
// import  mongoose  from "mongoose";
const cors = require('cors');
// import user_Router from './routes/user_Routes';

const dotenv =  require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config({path: 'config/config.env'});

// const port = 5000;
const port = process.env.PORT;
const URI = process.env.MONGODB_URL
mongoose.connect(URI).catch(error => {
    console.log(error);
}).then(() => console.log('mongodb connected'));

// routes
const user_Router = require('./routes/user_Routes');
app.use('/users' , user_Router )

const note_Router = require('./routes/noteRouter');
app.use('/api/router' , note_Router )



// listen Server
app.listen(port , ()=> {
    console.log(`Server is running on port number : ${port}`)
})
// connect to mongodb

