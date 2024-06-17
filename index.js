import express from 'express'
import bodyParser from 'body-parser'
import sendMessageToWhatsApp from './src/sendMessageWpp.js'

const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/hook', (req, res) => {
  res.status(200).end()
  sendMessageToWhatsApp(req.body.message)
})

app.get('/health', (req, res) => {
  res.send('Ok')
})

app.listen(port, () => console.log(`Running on port ${port}`))

export default app
