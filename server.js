const express= require('express');
require('./config/database');
const PORT = 5527
const morgan = require('morgan')
const cors = require('cors')
const weatherrouter =require('./routes/weather')
const app = express()
app.use(express.json());
app.use(weatherrouter);
app.use(cors({origin:"*"}))
app.use(morgan('dev'));
app.listen(PORT,()=>{
  console.log(`server listenimg to ${PORT}`);
  
})