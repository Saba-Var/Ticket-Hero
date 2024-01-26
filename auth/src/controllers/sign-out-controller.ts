import type { Request, Response } from 'express'

export const signOutController = async (req: Request, res: Response) => {
  req.session = null
  res.send({ message: 'Sign out successfully!' })
}
