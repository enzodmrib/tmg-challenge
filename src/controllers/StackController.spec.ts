import { describe, expect, it } from "vitest";
import request from 'supertest'
import { env } from "../env";

describe('Stack endpoints', () => {
  it('Should allow the insertion of a new item to the stack', async () => {
    const response = await request(env.API_URL)
      .post('/stack/item')
      .send({ value: "Hello" })

    expect(response.status).toBe(200)
  })

  it('Should allow popping the top item from the stack', async () => {
    await request(env.API_URL)
      .post('/stack/item')
      .send({ value: "Hello" })
    const response = await request(env.API_URL)
      .post('/stack/item/pop')
      .send()

    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello')
  })
})