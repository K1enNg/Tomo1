import express, { Request, Response } from 'express'
const app = express()
const port = 5555

app.get('/', (req: Request, res: Response) => {
  res.send('This is TOMO backend')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
