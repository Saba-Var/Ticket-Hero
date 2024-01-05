import express from 'express'

const signUpRouter = express.Router()

signUpRouter.post('/api/users/sign-up', (_req, res) => {
  res.send('sign up route')
})

export { signUpRouter }
