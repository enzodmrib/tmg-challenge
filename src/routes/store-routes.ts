import express from 'express'
import { StoreController } from '../controllers/StoreController'
import { z } from 'zod'
import { validate } from '../middlewares/validate'

export const storeRouter = express.Router()

const storeController = new StoreController()

const keyValueSchema = z.object({
  value: z.string(),
  ttl: z.number().optional(),
});

const itemSchema = z.record(keyValueSchema).refine((obj) => Object.keys(obj).length > 0, {
  message: "Object must have at least one key",
});


storeRouter.post('/store/item', validate({ bodySchema: itemSchema }), storeController.addToStore)
storeRouter.get('/store/item/:key', storeController.getFromStore)
storeRouter.delete('/store/item/:key', storeController.removeFromStore)