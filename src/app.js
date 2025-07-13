const express = require('express')
const mongoose = require('mongoose');
const User = require("../models/Users/users")
const dotenv = require('dotenv').config()
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI;
const app = express()
const router = require('../routes/routes')
app.use(express.json())
app.use(router)   
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));
// conectando ao DB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Conecct no DB!'))
  .catch((err) => console.error('Erro ao conectar:', err));

app.listen(PORT, ()=>{
    console.log(`server running in ${PORT}`);
})