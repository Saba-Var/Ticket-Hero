import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const currentUserController = async (req: Request, res: Response) => {
  if (!req?.session?.jwt) {
    return res.status(401).send({ currentUser: null })
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!)
    return res.send({ currentUser: payload })
  } catch (_err) {
    return res.status(401).send({ currentUser: null })
  }
}
