import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


// Create express app
const app = express()

// setting up CORS
app.use(
    cors({
        origin: true,
        credentials: true
    })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.send('Working')
})

export default app