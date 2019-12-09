-- // User Requested Shortened Links // --

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