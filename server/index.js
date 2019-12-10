require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const loginRegCtrl = require('./controllers/loginRegCtrl')

// -- MIDDLEWARE -- //

// give ability to parse incoming JSON from req.body
app.use(express.json());

// cookie
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2 // 2 hours
  }
}));

// -- MASSIVE -- //
massive(CONNECTION_STRING).then((database) => {
  app.set("db", database);
  console.log('database set!');
  console.log(database.listTables());
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`);
  });
});

// -- ENDPOINTS -- //

// Authentication
app.get('/api/users', loginRegCtrl.getUsers);
app.get('/auth/logout', loginRegCtrl.logout);

// User Saved Links