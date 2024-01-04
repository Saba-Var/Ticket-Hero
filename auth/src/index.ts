import { json } from 'body-parser'
import express from 'express'

const app = express()
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
  res.send('Test use data')
})

const port = 3000
app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`)
})
