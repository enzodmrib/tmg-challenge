import { ApiError } from "../errors/ApiError"

export class StoreService {
  public store: Record<string, { value: any, expires_in?: number }> = {}

  add = (key: string, item: { value: any, ttl?: number }) => {
    this.store[key] = { value: item.value }

    if (item.ttl) {
      this.store[key].expires_in = new Date().getTime() + (item.ttl * 1000)
    }
  }

  get = (key: string) => {
    const item = this.store[key]

    if (!item) {
      throw new ApiError(404, 'No value was found for this key')
    }

    const hasExpired = item.expires_in && (new Date().getTime() > item.expires_in)

    if (hasExpired) {
      this.delete(key)
      throw new ApiError(404, 'No value was found for this key')
    }

    return this.store[key]?.value
  }

  delete = (key: string) => {
    const { [key]: _, ...rest } = this.store;
    this.store = rest
  }
}