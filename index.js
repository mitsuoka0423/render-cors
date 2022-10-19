const express = require('express')
const cors = require('cors')
const axios = require('axios');
const app = express()

app.use(cors());

app.get('', async function (req, res, next) {
  try {
    console.log(req.query.url);
    const response = await axios.get(req.query.url);
    return res.json(response.data);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
