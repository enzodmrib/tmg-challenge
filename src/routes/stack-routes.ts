import express from 'express'
import { StackController } from '../controllers/StackController'
import { validate } from '../middlewares/validate'
import { z } from 'zod'

export const stackRouter = express.Router()

const stackController = new StackController()

const stackItemSchema = z.object({
  value: z.string()
})

stackRouter.post('/stack/item', validate({ bodySchema: stackItemSchema }), stackController.addToStack)
stackRouter.post('/stack/item/pop', stackController.getFromStack)

