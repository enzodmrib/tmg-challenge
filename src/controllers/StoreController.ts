import { Request, Response } from "express";
import { StoreService } from "../services/StoreService";
import { RequiredValueError } from "../errors/RequiredValueError";
import { ItemNotFoundError } from "../errors/ItemNotFoundError";

export class StoreController {
  private storeService = new StoreService()

  addToStore = (request: Request, response: Response) => {
    try {
      // adds one key at a time
      const key = Object.keys(request.body)[0]

      const item = request.body[key]

      this.storeService.add(key, item)

      response.status(200).send()
    } catch (err) {
      if (err instanceof RequiredValueError) {
        response.status(400).send({ message: err.message })
        return
      }
    }
  }

  getFromStore = (request: Request, response: Response) => {
    try {
      const key = request.params.key

      const item = this.storeService.get(key)

      response.status(200).send(item)
    } catch (err) {
      if (err instanceof ItemNotFoundError) {
        response.status(404).send({ message: err.message })
        return
      }
    }
  }

  removeFromStore = (request: Request, response: Response) => {
    try {
      const key = request.params.key

      this.storeService.delete(key)

      response.status(204).send()
    } catch (err) {
      if (err instanceof RequiredValueError) {
        response.status(400).send({ message: err.message })
        return
      }
    }
  }
}