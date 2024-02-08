const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

//adding routes
app.use('/auth',require('./Routes/Authjwt')); //authentication is here

app.use('/users', require('./Routes/UserCrud')); //user-crud
app.use('/products',require('./Routes/ProductsCrud')); //products-crud

// Starting  the server
app.listen(PORT, () => {
  console.log(`server started succesfully ${PORT}`);
});



