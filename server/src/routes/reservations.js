const express = require('express')
const {
    getAllReservations,
    getReservationById
} = require('../controllers/reservationsController')

const router = express.Router()

router.route('/')
    .get(getAllReservations)

router.route('/:id')
    .get(getReservationById)

module.exports = router