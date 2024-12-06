import { describe, it, expect } from "vitest";
import request from 'supertest'
import { env } from "../env";

describe('Store endpoints', () => {
  it('Should be able to add new key value pairs', async () => {
    const response = await request(env.API_URL)
      .post("/store/item")
      .send({
        name: {
          value: "John"
        }
      })

    expect(response.status).toBe(201)
  })

  it('Should be able to retrive value by key', async () => {
    const key = "name"

    await request(env.API_URL)
      .post("/store/item")
      .send({
        [key]: {
          value: "John"
        }
      })

    const response = await request(env.API_URL)
      .get(`/store/item/${key}`)
      .send()

    expect(response.status).toBe(200)
    expect(response.text).toBe("John")
  })

  it('Should be able to delete value by key', async () => {
    const key = "name"

    await request(env.API_URL)
      .post("/store/item")
      .send({
        [key]: {
          value: "John"
        }
      })

    const response = await request(env.API_URL)
      .delete(`/store/item/${key}`)
      .send()

    expect(response.status).toBe(204)
  })
})