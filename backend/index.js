const express = require('express')
const app = express()
const port = 3600
const { DATA } = require('./data');
const cors = require('cors')

app.use(cors())

app.get('/api/carousel', (req, res) => {
  try {
    const { query: { slides } } = req;
    if (slides > 10) {
      return res.status(500).json({
        success: false,
        error: 'Cannot get more than 10 items'
      })
    }
    res.send(DATA.slice(0, slides))
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})