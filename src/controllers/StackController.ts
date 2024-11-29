import { Request, Response } from "express"
import { StackService } from "../services/StackService"
import { EmptyStackError } from "../errors/EmptyStackError"
import { RequiredValueError } from "../errors/RequiredValueError"

export class StackController {
  private stackService = new StackService()

  addToStack = (request: Request, response: Response): void => {
    try {
      const item = request.body.value

      this.stackService.add(item)

      response.status(200).send()
    } catch (err) {
      if (err instanceof RequiredValueError) {
        response.status(400).send({ message: err.message })
        return
      }

      throw err
    }
  }

  getFromStack = (request: Request, response: Response): void => {
    try {
      const item = this.stackService.pop()

      response.status(200).send(item)
    } catch (err) {
      if (err instanceof EmptyStackError) {
        response.status(400).send({ message: err.message })
        return
      }

      throw err
    }
  }
}