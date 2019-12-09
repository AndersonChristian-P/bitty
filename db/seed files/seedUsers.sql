-- // USER INFO // --

CREATE TABLE users {
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
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

-- // USER SAVED LINKS // --

CREATE TABLE links {
  link_id SERIAL PRIMARY KEY
  original_link TEXT,
  shortened_link TEXT,
  user_id INTEGER REFERENCES users
};

INSERT INTO links (original_link, shortened_link, user_id)
VALUES (
  'https://www.jello.com',
  'https://jello-short',
  1
);