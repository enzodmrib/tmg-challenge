import { NextFunction, Request, Response } from "express";
import { StoreService } from "../services/StoreService";

export class StoreController {
  private storeService = new StoreService()

  addToStore = (request: Request, response: Response, next: NextFunction) => {
    try {
      const key = Object.keys(request.body)[0]

      const item = request.body[key]

      this.storeService.add(key, item)

      response.status(201).send()
    } catch (err) {
      next(err)
    }
  }

  getFromStore = (request: Request, response: Response, next: NextFunction) => {
    try {
      const key = request.params.key

      const item = this.storeService.get(key)

      response.status(200).send(item)
    } catch (err) {
      next(err)
    }
  }

  removeFromStore = (request: Request, response: Response, next: NextFunction) => {
    try {
      const key = request.params.key

      this.storeService.delete(key)

      response.status(204).send()
    } catch (err) {
      next(err)
    }
  }
}