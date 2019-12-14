const bcrypt = require('bcryptjs');

module.exports = {

  getUsers: (req, res) => {
    const db = req.app.get('db');

    db.getUsers()
      .then(results => {
        res.status(200).send(results);
      });
  },

  register: (req, res) => {
    const db = req.app.get('db');
    const { firstname, lastname, email, password: userPass } = req.body;
    // const { session } = req;

    let emailTaken = await db.checkEmail({ email });
    emailTaken = +emailTaken[0].count;

    if (emailTaken !== 0) {
      return res.sendStatus(409);
    }

    const salt = bcrypt.genSaltSync(10);
    const hash_pass = bcrypt.hashSync(userPass, salt);

    const user = await db.registerUser({
      firstname,
      lastname,
      email,
      hash_pass
    })

    // session.user = {
    //   email,
    //   user_id: user[0].login_id
    // }

    res.status(200).send({
      authenticated: true,
      email: user[0].email,
      firstname: user[0].firstname,
      lastname: user[0].lastname,
      user_id: user[0].login_id
    })

  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }

};