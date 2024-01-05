import express from 'express'

const signInRouter = express.Router()

signInRouter.post('/api/users/sign-in', (_req, res) => {
  res.send('sign in route')
})

export { signInRouter }
