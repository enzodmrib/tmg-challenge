import { beforeEach, describe, expect, it } from "vitest"
import { StackService } from "./StackService"
import { EmptyStackError } from "../errors/EmptyStackError"

let sut: StackService

describe('Stack Service', () => {
  beforeEach(() => {
    sut = new StackService()
  })

  it('Should be able to add items to the stack', () => {
    const value = 'Hello'

    sut.add(value)

    expect(sut.stack).toContain('Hello')
  })

  it('Should be able to pop items from the stack', () => {
    const valueToBeAdded = 'Hello'

    sut.add(valueToBeAdded)

    const item = sut.pop()

    expect(sut.stack).toHaveLength(0)
    expect(item).toEqual(valueToBeAdded)
  })

  it('Should throw error when tries to pop items from empty stack', () => {
    expect(sut.pop).toThrow(new EmptyStackError())
  })

  it('Should have the behavior of a LIFO stack', () => {
    const value1 = "Hello"
    const value2 = "World"

    sut.add(value1)
    sut.add(value2)

    const item = sut.pop()
    expect(sut.stack).toContain('Hello')
    expect(item).toEqual(value2)
  })
})