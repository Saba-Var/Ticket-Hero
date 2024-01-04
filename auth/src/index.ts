import { json } from 'body-parser'
import express from 'express'

const app = express()
app.use(json())

const port = 3000
app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`)
})
