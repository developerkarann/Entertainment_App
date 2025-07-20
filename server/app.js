const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const moviesRoutes = require('./routes/moviesRoute')
const seriesRoutes = require('./routes/seriesRoute')
const bookmarkRoute = require('./routes/bookmarkRoute')
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: process.env.CLIENT_SERVER, // your frontend domain
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())


app.use('/api', userRoutes)
app.use('/api', moviesRoutes)
app.use('/api', seriesRoutes)
app.use('/api', bookmarkRoute)


module.exports = app