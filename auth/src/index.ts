import { currentUserRouter } from './routes/current-user'
import { json } from 'body-parser'
import express from 'express'

const app = express()
app.use(json())

app.use(currentUserRouter)

const port = 3000
app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`)
})
