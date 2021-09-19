/*
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
    useNewUrlParser:true
    
    
    
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb connection success!");
})



app.listen(PORT,() => {
    console.log('server is up and running on port number: ${PORT}')
})
*/

//



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cors = require('cors');
//import Cors from 'cors';


//import Forms from './dbForm.js';


//import routes
const postRoutes = require('./routes/posts');


//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://ITP_users:BmOeCla3ag6huxYm@cluster0.vmcdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//Middleware
app.use(express.json());
app.use(Cors());
app.use(bodyParser.json());
app.use(postRoutes);//route middleware

//db config
mongoose.connect(connection_url, {
    
    useNewUrlParser:true
    
    
})


/*
//API Endpoint
app.get("/",(req,res)=>res.status(200).send("Hello Clever Programmers!!!!"));

app.post("/feedback/form",(req, res) => {
    const dbFormli =req.body;
    
    Forms.create(dbFormli, (err, data=>{
        if (err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data)//if success send data
        }
    }));
});

            //download the data from mongo
app.get("/feedback/form",(req, res) => {
    Forms.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

*/


//Listener

app.listen(port, () => console.log(`Listening on localhost: ${port}`));