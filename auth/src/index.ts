import { errorHandler } from './middlewares/errorHandler'
import { NotFoundError } from './errors/not-found-error'
import { authRouter } from './routes/auth-router'
import { serverStart } from './config/serverStart'
import { json } from 'body-parser'
import express from 'express'
import 'express-async-errors'

const app = express()
app.use(json())

app.use('/api/users', authRouter)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

serverStart(app)
