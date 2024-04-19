const express = require('express')
const cors = require('cors') //cors are used to allow anyone to open from any local host port number.
const morgan = require('morgan') //it is npm  package that logs the request
const connectDatabase = require('./config/db')
const router = require('./routes/route')

const app = express() // we call express function in app or  this is how we created an express app.

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use('/api', router)



connectDatabase().then(() => {
  app.listen(8080, () => console.log('server Listen on http://localhost:8080'))
})
