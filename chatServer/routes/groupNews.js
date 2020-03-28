const express = require('express')
const Router = express.Router()
const groupNewsController = require('./../controller/groupNews')

Router.get('/recentnews', groupNewsController.getRecentGroupNews)
Router.post('/historymsg', groupNewsController.getGroupHistoryNews)

module.exports = Router
