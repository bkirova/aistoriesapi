const express = require('express')
const app = express()
const port = 3000

const latestRout = require('./api/ai/latest');

app.get('/api/ai/latest', (req, res) => latestRout(req, res))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})