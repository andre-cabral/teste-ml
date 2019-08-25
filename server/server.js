const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const queryHelpers = require('./query-helpers.js');
const itemHelpers = require('./item-helpers.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/items', (req, res) => {
  //o encode evita que caracteres especiais causem problemas.
  const query = encodeURI(req.query.q);
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then( (response) => {
      res.send(queryHelpers.parseQueryResults(response.data));
    })
    .catch( (error) => {
      res.send({error});
      console.log(error);
    });
});

app.get('/api/items/:id', (req, res) => {
  const id = encodeURI(req.params.id);
  axios.get(`https://api.mercadolibre.com/items/${id}`)
    .then( (response) => {
      axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        .then( (responseDescription) => {
          res.send(itemHelpers.parseItemResults(response.data, responseDescription.data));
        })
        .catch( (error) => {
          res.send({error});
          console.log(error);
        });
    })
    .catch( (error) => {
      res.send({error});
      console.log(error);
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));