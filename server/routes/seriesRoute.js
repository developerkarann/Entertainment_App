const express = require('express');
const { getAllSeries, findSeries } = require('../controllers/seriesController');
const authentication = require('../middleware/authentication');
const router = express.Router();


router.route('/getseries').get( getAllSeries)

router.route('/series/:id').get(findSeries)

module.exports = router