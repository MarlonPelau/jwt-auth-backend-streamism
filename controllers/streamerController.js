const express = require('express')
const streamer = express.Router()
const {findStreamerByUsername} = require("../queries/streamers")

const { authenticateToken } = require('../middlewares/authenticateToken')

streamer.get('/', authenticateToken, async (req, res) => {
  res.json({ message: 'Streamer controller' })
})

streamer.get('/:username', async (req, res) => {
  const { username } = req.params
  const streamer = await findStreamerByUsername(username)
  console.log("STREAMER", streamer)
  if(streamer[0]){
    res.status(200).json(streamer);
} else {
    res.status(500).json({ error: "streamer not found"})
}
})

module.exports = streamer
