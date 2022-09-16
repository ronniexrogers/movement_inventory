const express = require('express')
// require('./db/connection')
const app = express()
const cors = require('cors')
require('dotenv').config()
const testRouter = require('./routes/test')

app.set('port', 3001)
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.use('/', testRouter)

// app.use('/api/appointments', router)

// app.use('/api/users', userRouter)

// app.use('/api/salonPhotos', imageRouter)

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`)
})