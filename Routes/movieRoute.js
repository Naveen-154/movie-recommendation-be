const express = require('express')
const { getAllMovies, addMovie, suggestMovie } = require('../Controllers/MovieController')
const router = express.Router()

router.route('/').get(getAllMovies)

router.route('/addMovie').post(addMovie)

router.route('/suggest').post(suggestMovie)

module.exports = router