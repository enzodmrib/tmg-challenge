import express from 'express'
import { stackRouter } from './routes/stack-routes'
import { storeRouter } from './routes/store-routes'

export const app = express()

app.use(express.json())
app.use(stackRouter)
app.use(storeRouter)