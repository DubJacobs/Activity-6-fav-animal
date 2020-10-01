const express = require('express');

const app = express();

app.listen(3002, () => {
  console.log('server started listening on PORT http://localhost:3001');
});
