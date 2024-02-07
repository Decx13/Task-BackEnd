const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Start the server
app.listen(PORT, () => {
  console.log(`server started succesfully ${PORT}`);
});