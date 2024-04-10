const express = require("express");

const platforms = express.Router();

const reviewsController = require('./reviewsController.js')

const { getAllPlatforms, getOnePlatform } = require("../queries/platforms")

platforms.use('/:platform_id/reviews', reviewsController)

//Index
platforms.get('/', async (req,res) => {
    const getAllPlatforms = await getAllPlatforms();

    if(getAllPlatforms[0]){
        res.status(200).json(getAllPlatforms);
    } else {
        res.status(500).json({ error: "server error"})
    }
});

//Show
platforms.get('/:id', async (req, res) => {
    const { id } = req.params

    const onePlatform = await getOnePlatform(id)
    if(onePlatform) {
        res.status(200).json(onePlatform)
    } else {
        res.status(418).json({ error: 'Platform not found'})
    }

})

module.exports = platforms