import express from 'express'
import { stackRouter } from './routes/stack-routes'
import { storeRouter } from './routes/store-routes'
import { globalErrorHandler } from './errors/globalErrorHandler'
import fs from 'fs'
import path from 'path'
import swaggerUi from 'swagger-ui-express'

export const app = express()

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, '../swagger-api-docs.json'), 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use(stackRouter)
app.use(storeRouter)
app.use(globalErrorHandler) 