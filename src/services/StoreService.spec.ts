import { beforeEach, describe, expect, it, vi } from "vitest";
import { StoreService } from "./StoreService";
import { StackService } from "./StackService";
import { ApiError } from "../errors/ApiError";

let sut: StoreService

describe('Store Service', () => {
  beforeEach(() => {
    sut = new StoreService()

    vi.useFakeTimers();
  })

  it('Should be able to add key value pairs to store', () => {
    const key = 'name'
    const item = { value: 'John' }

    sut.add(key, item)

    expect(sut.store[key].value).toEqual(item.value)
  })

  it('Should be able to add key value pairs with ttl to store', () => {
    const key = 'name'
    const item = { value: 'John', ttl: 30 }
    const expirationDate = new Date().getTime() + (item.ttl * 1000)

    sut.add(key, item)

    expect(sut.store[key].value).toEqual(item.value)
    expect(sut.store[key].expires_in).toEqual(expirationDate)
  })

  it('Should be able to get values from store that are not expired', () => {
    const key = 'name'
    const item = { value: 'John', ttl: 2 }

    sut.add(key, item)

    vi.advanceTimersByTime(1000);

    const response = sut.get(key)

    expect(response).toBeDefined()
  })

  it('Should not be able to get values from store that are expired', () => {
    const key = 'name'
    const item = { value: 'John', ttl: 2 }

    sut.add(key, item)

    vi.advanceTimersByTime(3000);

    expect(() => sut.get(key)).toThrow(new ApiError(404, 'No value was found for this key'))
  })

  it('Should be able to remove value by key from store', () => {
    const key = 'name'
    const item = { value: 'John' }

    sut.add(key, item)

    sut.delete(key)

    expect(sut.store[key]).toBeUndefined()
  })
})