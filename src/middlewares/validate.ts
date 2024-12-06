import { NextFunction, Request, Response } from "express";
import { ZodEffects, ZodObject } from "zod";

interface ValidateRequestParams {
  bodySchema?: ZodObject<any> | ZodEffects<any>
}

export function validate({ bodySchema }: ValidateRequestParams) {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      if (bodySchema) {
        const parsingResponse = bodySchema.safeParse(request.body)

        if (!parsingResponse.success) {
          throw parsingResponse.error
        }
      }

      next()
    } catch (err) {
      next(err)
    }
  }
}