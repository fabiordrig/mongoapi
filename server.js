const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


//inicia app
const app = express();


////connect db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes'))

app.listen(8080);