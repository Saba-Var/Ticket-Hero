import { errorHandler } from './middlewares/error-handler'
import { currentUserRouter } from './routes/current-user'
import { NotFoundError } from './errors/not-found-error'
import { signOutRouter } from './routes/sign-out'
import { signInRouter } from './routes/sign-in'
import { signUpRouter } from './routes/sign-up'
import { json } from 'body-parser'
import mongoose from 'mongoose'
import express from 'express'
import 'express-async-errors'

const app = express()
app.use(json())

app.use(currentUserRouter)
app.use(signInRouter)
app.use(signUpRouter)
app.use(signOutRouter)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

const start = async () => {
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

start()
