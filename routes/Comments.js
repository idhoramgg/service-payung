const express = require('express');
const route = express.Router();

const {
    getAllComments,
    addComments
} = require('../controllers/Comments');

route.get('/comments', getAllComments)
route.post('/comments', addComments)

module.exports = route;