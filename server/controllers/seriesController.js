const Series = require('../schema/seriesSchema')

exports.getAllSeries = async (req, res) => {
    try {
        const allSeries = await Series.find({});
        if (!allSeries) {
            return res.status(401).json({ suceess: false, message: 'Failed to fetch allSeries' })
        }
        return res.status(200).json({
            sucess: true,
            message: 'allSeries Fetched sucessfully',
            data: allSeries
        })
    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })

    }
}

exports.findSeries = async (req, res) => {
    const { id } = req.params
    try {
        const series = await Series.find({ id });
        if (!series) {
            return res.status(401).json({ suceess: false, message: 'Failed to fetch series' })
        }
        return res.status(200).json({
            sucess: true,
            message: 'series Fetched sucessfully',
            data: series
        })
    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })
    }
}