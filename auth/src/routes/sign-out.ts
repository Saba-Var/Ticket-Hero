import express from 'express'

const signOutRouter = express.Router()

signOutRouter.post('/api/users/sign-out', (_req, res) => {
  res.send('sign out route')
})

export { signOutRouter }
