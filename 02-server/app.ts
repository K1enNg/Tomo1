import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT 

app.get('/', (req: Request, res: Response) => {
  res.send('This is TOMO backend')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
