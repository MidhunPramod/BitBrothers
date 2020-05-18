const express = require('express');
const routes = require('./routes/router');
const connectDB = require('./config/db');
require('dotenv').config()

const app = express();
connectDB();

app.use(express.json());

app.use('/api',routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,()=>{
    console.log("Started Server");
})
