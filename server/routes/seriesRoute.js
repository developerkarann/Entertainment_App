const express = require('express');
const { getAllSeries, findSeries } = require('../controllers/seriesController');
const authentication = require('../middleware/authentication');
const router = express.Router();


router.route('/getseries').get( authentication , getAllSeries)

router.route('/series/:id').get( authentication, findSeries)

module.exports = router