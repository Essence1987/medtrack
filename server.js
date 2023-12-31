const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const uuid = require('uuid');
const session = require("express-session");
// initalize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const models = require('./models')
// const protect = require('./controllers/protect');
// const dashboard = require('./controllers/dashboard');
const route = require('./controllers')
const { format } = require('date-fns');

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
const hbs = exphbs.create({ 
  helpers: {
    formatDate: (date) => {
      return format(new Date(date), 'MM/dd/yyyy');
    },
  }, 
});

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/* app.use(routes); */

// app.get('/dashboard', protect, dashboard);
app.use(route);
// app.use(authRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT + '!'));
});