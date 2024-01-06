import type { Request, Response, NextFunction } from 'express'

type AsyncHandlerFnParameter = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>

export const asyncHandler = (fn: AsyncHandlerFnParameter) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next)
  }
}
