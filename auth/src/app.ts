import { errorHandler } from './middlewares/errorHandler'
import { NotFoundError } from './errors/not-found-error'
import { authRouter } from './routes/auth-router'
import cookieSession from 'cookie-session'
import { json } from 'body-parser'
import express from 'express'
import 'express-async-errors'

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
)

app.use('/api/users', authRouter)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
