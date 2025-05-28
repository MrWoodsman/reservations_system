const express = require('express')
const config = require('./config')
const reservationRouter = require('./routes/reservations')

const app = express()

// Middleware - pozwala na parsowanie JSON-a w body żądań
app.use(express.json())

app.use('/api/reservations', reservationRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the Reservation System API!')
})

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
    console.log(`Access it at http://localhost:${config.port}`);
})