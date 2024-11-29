import express from 'express'
import { StoreController } from '../controllers/StoreController'

export const storeRouter = express.Router()

const storeController = new StoreController()

storeRouter.post('/add-to-store', storeController.addToStore)
storeRouter.get('/get-from-store/:key', storeController.getFromStore)
storeRouter.delete('/remove-from-store/:key', storeController.removeFromStore)