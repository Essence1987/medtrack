const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const uuid = require('uuid');
const authRoutes = require('./controllers/api/auth.js')
const session = require("express-session");
// initalize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sessionSecret = uuid.v4();

// cookie properties for session
const sess = {
    secret: sessionSecret,
    cookie: { maxAge: 300000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize }),
};

// session middleware
app.use(session(sess));

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });
// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(authRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});