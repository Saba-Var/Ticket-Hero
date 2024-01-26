import { BadRequestError } from '../errors/bad-request-error'
import type { Request, Response } from 'express'
import { User } from '../models/user/user'
import jwt from 'jsonwebtoken'

export const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw new BadRequestError('Email in use')
  }

  const user = User.build({ email, password })
  await user.save()

  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  )

  req.session = {
    jwt: userJwt,
  }

  res.status(201).send(user)
}
