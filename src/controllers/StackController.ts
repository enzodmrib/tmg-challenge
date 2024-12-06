import { NextFunction, Request, Response } from "express"
import { StackService } from "../services/StackService"
import { ApiError } from "../errors/ApiError"
import { ValidationError } from "../errors/ValidationError"

export class StackController {
  private stackService = new StackService()

  addToStack = (request: Request, response: Response, next: NextFunction): void => {
    try {
      const item = request.body.value

      this.stackService.add(item)

      response.status(200).send()
    } catch (err) {
      next(err)
    }
  }

  getFromStack = (request: Request, response: Response, next: NextFunction): void => {
    try {
      const item = this.stackService.pop()

      response.status(200).send(item)
    } catch (err) {
      next(err)
    }
  }
}