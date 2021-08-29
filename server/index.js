import mongoose from 'mongoose'
import app from './server.js'
const port = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECT, (err) => {
    if (err) return console.error(`Unable to connect to DB: ${err}`)
    console.log(`Server has connected to DB`)
    app.listen(port, () => console.log(`Server has been connected on port ${port}`))
})