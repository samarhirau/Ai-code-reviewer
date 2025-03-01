import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import userRoutes from './Routes/User.routes.js'
import aiRoutes from './Routes/AiReview.routes.js'


const app = express()

const corsOptions = {
    origin: 'http://localhost:5174', // Adjust with your frontend URL
    credentials: true, // Allow credentials (cookies, Authorization headers)
}

app.use(cors(corsOptions))


app.use(cookieParser())
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoutes)
app.use('/api/ai', aiRoutes)





export { app }
