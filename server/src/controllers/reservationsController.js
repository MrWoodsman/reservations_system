//  Dane tymczasowe w pamięci, potem połączenie z bazą danych
let reservations = []
let nextReservationId = 1

/**
 * @desc Get all reservations
 * @route GET /api/reservations
 * @access Public
 */
const getAllReservations = (req, res) => {
    res.status(200).json({
        success: true,
        data: reservations
    })
}

/**
 * @desc Get single reservation by ID
 * @route GET /api/reservations/:id
 * @access Public
 */
const getReservationById = (req, res) => {
    const reservation = reservations.find(r => r.id === parseInt(req.parms.id))
    if (!reservation) {
        return res.status(404).json({
            success: false,
            message: "Reservation not found"
        })
    }
    res.status(200).json({
        success: true,
        data: reservation
    })
}

module.exports = {
    getAllReservations,
    getReservationById
}