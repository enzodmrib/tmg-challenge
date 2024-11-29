import { EmptyStackError } from "../errors/EmptyStackError"
import { RequiredValueError } from "../errors/RequiredValueError"

export class StackService {
  public stack: any[] = []

  add = (value: any) => {
    if (!value) {
      throw new RequiredValueError()
    }

    this.stack.push(value)
  }

  pop = () => {
    const item = this.stack.pop()

    if (!item) {
      throw new EmptyStackError()
    }

    return item
  }
}