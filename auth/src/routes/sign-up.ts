import { DatabaseConnectionError } from '../errors/database-connection-error'
import { RequestValidationError } from '../errors/request-validation-error'
import { body, validationResult } from 'express-validator'
import type { Request, Response } from 'express'
import express from 'express'

const signUpRouter = express.Router()

signUpRouter.post(
  '/api/users/sign-up',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
    }

    throw new DatabaseConnectionError()

    res.send('User created')
  }
)

export { signUpRouter }
