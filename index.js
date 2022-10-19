const express = require('express')
const cors = require('cors')
const axios = require('axios');
const app = express()

const port = process.env.PORT ?? 20080;

app.use(cors());

app.get('/', (req, res) => {
  res.json('hello world');
});

app.get('/cors', async function (req, res, next) {
  try {
    console.log(req.query.url);
    const response = await axios.get(req.query.url);
    return res.json(response.data);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
})

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`)
})

module.exports = app;
