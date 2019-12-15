const bcrypt = require('bcryptjs');

module.exports = {

  getUsers: (req, res) => {
    const db = req.app.get('db');

    db.getUsers()
      .then(results => {
        res.status(200).send(results);
      });
  },

  register: async (req, res) => {
    const db = req.app.get('db');
    const { first_name, last_name, email, password: userPass } = req.body;
    // const { session } = req; 

    let emailTaken = await db.checkEmail({ email });
    emailTaken = +emailTaken[0].count;

    if (emailTaken !== 0) {
      return res.sendStatus(409);
    }

    const salt = bcrypt.genSaltSync(10);
    const hash_pass = bcrypt.hashSync(userPass, salt);

    const user = await db.registerUser({
      first_name,
      last_name,
      email,
      hash_pass
    })

    // session.user = {
    //   email,
    //   user_id: user[0].login_id
    // }
    // need to figure out if we even need this on session when user registers
    // If a user registers shouldn't we push the same info as if the user logged in? 

    res.status(200).send({
      authenticated: true,
      email: user[0].email,
      first_name: user[0].first_name,
      last_name: user[0].last_name,
      user_id: user[0].login_id
    })

  },

  // login: async (req, res) => {
  //   const db = req.app.get("db")
  //   const { session } = req
  //   const { loginEmail: email, loginPassword } = req.body

  //   try {

  //     let user = await db.login({ email });

  //   } catch err {
  //     res.sendStatus(401)
  //   }


  // },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }

};