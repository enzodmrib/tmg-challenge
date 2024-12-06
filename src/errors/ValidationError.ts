export class ValidationError extends Error {
  public statusCode = 400

  constructor() {
    super('Value is required')
  }
}