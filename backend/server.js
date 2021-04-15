// npm install express cors mongoose dotenv
// npm install -g nodemon

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')

require('dotenv/config')

const app = express()
const port = process.env.port || 3000;

//middleware
app.use(cors());
app.use(express.json())
app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)

const connection = mongoose.connection;
mongoose.connect(process.env.DB_connection, {useNewUrlParser: true},{createIndexes: true});
connection.once('open', () => {
  console.log("Mongodb database connection established successfully!")
})

app.listen(port, () => console.log(`Server is running on port ${port}`))