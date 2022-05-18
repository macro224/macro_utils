const express = require('express')

const app = express()

app.get('/test', async (req, res) => {
  res.json({
    code: 0,
    msg: 'success!',
    data: []
  })
})

app.listen(3000)