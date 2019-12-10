const bcrypt = require('bcryptjs');

module.exports = {

  getUsers: (req, res) => {
    const db = req.app.get("db");

    db.getUsers()
      .then(results => {
        res.status(200).send(results);
      });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }

};