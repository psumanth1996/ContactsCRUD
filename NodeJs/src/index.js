const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose');

const cors = require('cors');
// const {mongose} = require('./db/mongoose')
const employeeRoute  =  require('./controller/employees')
const app = express()

app.use(express.json());

app.use(cors({origin:'http://localhost:4200'}))
app.use(employeeRoute);

app.listen(3000,()=> console.log('Server starte at port number: 3000'))