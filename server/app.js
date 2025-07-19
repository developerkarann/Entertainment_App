const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const moviesRoutes = require('./routes/moviesRoute')
const seriesRoutes = require('./routes/seriesRoute')
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: 'http://localhost:5173', // your frontend domain
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())


app.use('/', userRoutes)
app.use('/', moviesRoutes)
app.use('/', seriesRoutes)


module.exports = app