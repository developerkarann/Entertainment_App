const User = require('../schema/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.addBookmark = async (req, res) => {
    const userId = req.user.userId;
    const { movieId, title, image, type } = req.body;

    if (!movieId || !title || !image || !type) {
        return res.status(401).json({ suceess: false, message: 'Data not present' })
    }

    try {
        const user = await User.findById({ _id: userId })

        const alreadyBookmarked = user.bookmarks.some((item) => item.movieId === movieId);

        if (alreadyBookmarked) {
            return res.status(400).json({ message: 'Already bookmarked' });
        }

        user.bookmarks.push({ movieId, title, image, type });
        await user.save();

        res.status(200).json({ message: 'Bookmarked successfully', bookmarks: user.bookmarks });

    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })
    }
}

exports.getBookmarks = async (req, res) => {
    const userId = req.user.userId;

    try {
        const user = await User.findById(userId);
        res.status(200).json({ bookmarks: user.bookmarks });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch bookmarks', error: err.message });
    }
}

exports.removeBookmark = async (req, res) => {
    const userId = req.user.userId;
    const { movieId } = req.params

    if (!movieId) {
        return res.status(401).json({ suceess: false, message: 'movieId not found' })
    }

    try {
        const user = await User.findById({ _id: userId })

        const initialLength = user.bookmarks.length;

        user.bookmarks = user.bookmarks.filter(
            (bookmark) => bookmark.movieId !== movieId
        );

        if (user.bookmarks.length === initialLength) {
            return res.status(404).json({ message: 'Bookmark not found' });
        }

        await user.save();
        res.status(200).json({ message: 'Bookmark removed', bookmarks: user.bookmarks });

    } catch (error) {
        res.status(500).json({ message: 'Failed to delete bookmark', error: err.message });
    }
}