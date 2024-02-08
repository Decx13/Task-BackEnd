const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


//database connection
const sequelize = new Sequelize('backend_task', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// db connection test
app.get('/check-connection', (req, res) => {
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

});

//adding routes
app.use('/auth',require('./Routes/Authjwt')); //authentication is here

//app.use('/users', require('./Routes/UserCrud')); //user-crud
//app.use('/products',require('./Routes/ProductsCrud')); //products-crud

// Starting  the server
app.listen(PORT, () => {
  console.log(`server started succesfully ${PORT}`);
});



