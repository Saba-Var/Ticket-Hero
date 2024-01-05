import { DatabaseConnectionError } from '../errors/database-connection-error'
import { RequestValidationError } from '../errors/request-validation-error'
import type { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map((error) => {
      if (error.type === 'field') {
        return { message: error.msg, field: error.path }
      }
    })
    return res.status(400).send({ errors: formattedErrors })
  } else if (err instanceof DatabaseConnectionError) {
    return res.status(500).send({
      errors: [{ message: err.reason }],
    })
  } else {
    res.status(500).send({
      message: err.message || 'Something went wrong',
    })
  }
}
