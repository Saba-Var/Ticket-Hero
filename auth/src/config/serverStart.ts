import type { Express } from 'express'
import mongoose from 'mongoose'

export const serverStart = async (app: Express) => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
  }

  const serverPort = 3000
  app.listen(serverPort, () => {
    console.log(`Auth service listening at http://localhost:${serverPort}`)
  })
}
