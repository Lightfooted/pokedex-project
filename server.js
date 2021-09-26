const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//Middle-ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Handlebar
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Routes
const routes = require('./controllers/');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening!'));
}); 