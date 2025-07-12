const express = require('express')
const mongoose = require('mongoose');
const User = require("../models/Users/users")
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI;
const app = express()
const router = require('../routes/routes')
app.use(express.json())
app.use(router)   
// conectando ao DB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Conecct no DB!'))
  .catch((err) => console.error('Erro ao conectar:', err));

app.listen(PORT, ()=>{
    console.log(`server running in ${PORT}`);
})