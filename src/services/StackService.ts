import { ApiError } from "../errors/ApiError"

export class StackService {
  public stack: any[] = []

  add = (value: any) => {
    this.stack.push(value)
  }

  pop = () => {
    const item = this.stack.pop()

    if (!item) {
      throw new ApiError(400, 'Stack is Empty!')
    }

    return item
  }
}