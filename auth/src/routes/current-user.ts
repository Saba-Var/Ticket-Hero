import express from 'express'

const currentUserRouter = express.Router()

currentUserRouter.get('/api/users/current-user', (req, res) => {
  res.send('Test user data')
})

export { currentUserRouter }
