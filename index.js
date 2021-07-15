const express = require('express')
const app = express()
const port = 3000

const testRout = require('./api/test');
const latestRout = require('./api/latest');

app.get('/test', (req, res) => testRout(req, res))
app.get('/ai/latest', (req, res) => latestRout(req, res))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})