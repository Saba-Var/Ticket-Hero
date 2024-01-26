import { BadRequestError } from '../errors/bad-request-error'
import type { Request, Response } from 'express'
import { Password } from '../services/password'
import { User } from '../models/user/user'
import jwt from 'jsonwebtoken'

export const signInController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const currentUser = await User.findOne({ email })

  if (!currentUser) {
    throw new BadRequestError('Invalid credentials')
  }

  const passwordsMatch = await Password.compare(currentUser.password!, password)

  if (!passwordsMatch) {
    throw new BadRequestError('Invalid credentials')
  }

  const userJwt = jwt.sign(
    {
      id: currentUser.id,
      email: currentUser.email,
    },
    process.env.JWT_KEY!
  )

  req.session = {
    jwt: userJwt,
  }

  res.status(200).send(currentUser)
}
