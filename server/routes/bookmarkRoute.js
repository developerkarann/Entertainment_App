const express = require('express')
const { addBookmark, getBookmarks, removeBookmark } = require('../controllers/bookmarkHandler')
const authentication = require('../middleware/authentication')

const router  = express.Router()


router.route('/bookmark').post( authentication, addBookmark)

router.route('/bookmarks').get( authentication, getBookmarks)

router.route('/bookmark/:movieId').delete(authentication, removeBookmark)



module.exports = router