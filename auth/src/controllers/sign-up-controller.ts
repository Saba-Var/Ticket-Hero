import { BadRequestError } from '../errors/bad-request-error'
import type { Request, Response } from 'express'
import { User } from '../models/user'

export const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw new BadRequestError('Email in use')
  }

  const user = User.build({ email, password })
  await user.save()

  res.status(201).send(user)
}
