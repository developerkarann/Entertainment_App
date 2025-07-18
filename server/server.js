const cors = require('cors')
const dotenv = require('dotenv').config()
const app = require('./app')
const databse = require('./database/database')
const fs = require('fs')
const helper = require('./helper')
const PORT = process.env.PORT || 8000
databse()


app.get('/', (req, res) => {
    res.send('Server is running')
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

