-- // USERS // --

CREATE TABLE users {
  user_id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(75)
};

INSERT INTO users (firstname, lastname, email)
VALUES (
  'Christian',
  'Anderson',
  'ca@seemail.com'
);

-- // USER LOGIN // --

CREATE TABLE user_login {
  login_id SERIAL PRIMARY KEY,
  email VARCHAR(50),
  hash_password TEXT
};

INSERT INTO user_login (email, hash_password)
VALUES (
  'ca@seemail.com',
  'password'
);