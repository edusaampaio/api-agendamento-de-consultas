const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI;
const app = express()
app.use(express.json())
const router = require('../routes/users')
app.use(router)   

// conectando ao DB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro ao conectar:', err));

app.get('/', (req, res)=>{
    res.send('bem vindo ao meu server!')
})

const db: 'PORT=3050MONGO_URI=mongodb:/127.0.0.1:27017/apiusers'

app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta ${PORT}`);
    
})


