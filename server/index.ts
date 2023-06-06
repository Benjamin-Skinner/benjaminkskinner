import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv';

import newsRouter from './routes/news.js'

dotenv.config()

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.use('/news', newsRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})