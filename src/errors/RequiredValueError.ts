export class RequiredValueError extends Error {
  constructor() {
    super('Value is required')
  }
}