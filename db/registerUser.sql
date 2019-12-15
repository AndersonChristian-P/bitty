INSERT INTO user_login (email, hash_password)
VALUES (
  ${email},
  ${hash_pass}
);

INSERT INTO users (first_name, last_name, email)
VALUES (
  ${first_name},
  ${last_name},
  ${email}
);

-- return email, firstname, lastname, and login_id as part as a response
SELECT ul.email, first_name, last_name, login_id
FROM user_login ul
JOIN users u
ON ul.email = u.email
WHERE u.email = ${email};