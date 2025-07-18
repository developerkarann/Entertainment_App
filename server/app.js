const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const moviesRoutes = require('./routes/moviesRoute')
const seriesRoutes = require('./routes/seriesRoute')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/', userRoutes)
app.use('/', moviesRoutes)
app.use('/', seriesRoutes)


module.exports = app