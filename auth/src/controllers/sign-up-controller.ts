import { RequestValidationError } from '../errors/request-validation-error'
import type { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../errors/bad-request-error'
import { validationResult } from 'express-validator'
import { User } from '../models/user'

export const signUpController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
    }

    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new BadRequestError('Email in use')
    }

    const user = User.build({ email, password })
    await user.save()

    res.status(201).send(user)
  } catch (error) {
    return next(error)
  }
}
