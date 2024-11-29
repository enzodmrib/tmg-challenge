import { ItemNotFoundError } from "../errors/ItemNotFoundError"
import { RequiredValueError } from "../errors/RequiredValueError"

export class StoreService {
  public store: Record<string, { value: any, expires_in?: number }> = {}

  add = (key: string, item: { value: any, ttl?: number }) => {
    if (!item.value) {
      throw new RequiredValueError()
    }

    this.store[key] = { value: item.value }

    if (item.ttl) {
      this.store[key].expires_in = new Date().getTime() + (item.ttl * 1000)
    }
  }

  get = (key: string) => {
    const item = this.store[key]

    if (!item) {
      throw new ItemNotFoundError()
    }

    if (item.expires_in && (new Date().getTime() > item.expires_in)) {
      this.delete(key)
    }

    return this.store[key]?.value
  }

  delete = (key: string) => {
    const { [key]: _, ...rest } = this.store;
    this.store = rest
  }
}