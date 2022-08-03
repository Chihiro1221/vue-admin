const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();

app.use(history());
app.use('/', express.static(path.resolve(__dirname, '../dist')));
app.listen(4399, () => {
  console.log('http running at http://127.0.0.1:4399');
});
