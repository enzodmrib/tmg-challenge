import express from 'express'
import { StackController } from '../controllers/StackController'

export const stackRouter = express.Router()

const stackController = new StackController()

stackRouter.post('/add-to-stack', stackController.addToStack)

stackRouter.get('/get-from-stack', stackController.getFromStack)

