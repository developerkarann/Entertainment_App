const express = require('express')
const { createUser, loginUser } = require('../controllers/userHandler')
const router  = express.Router()

router.route('/createuser').post(createUser)

router.route('/login').post(loginUser)

module.exports = router