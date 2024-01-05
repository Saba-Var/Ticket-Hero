import { errorHandler } from './middlewares/error-handler'
import { currentUserRouter } from './routes/current-user'
import { NotFoundError } from './errors/not-found-error'
import { signOutRouter } from './routes/sign-out'
import { signInRouter } from './routes/sign-in'
import { signUpRouter } from './routes/sign-up'
import { json } from 'body-parser'
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

const port = 3000
app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`)
})
