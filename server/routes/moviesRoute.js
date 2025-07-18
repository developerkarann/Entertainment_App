const express = require('express');
const { getMovies, findMovie } = require('../controllers/moviesHandler');
const authentication = require('../middleware/authentication');
const router = express.Router();


router.route('/getmovies').get(authentication, getMovies)

router.route('/movie/:id').get(authentication, findMovie)

module.exports = router