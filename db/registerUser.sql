INSERT INTO user_login (email, hash_password)
VALUES (
  ${email},
  ${hash_pass}
);

INSERT INTO users (firstname, lastname, email)
VALUES (
  ${firstname},
  ${lastname},
  ${email}
);

-- return email, firstname, lastname, and login_id as part as a response
SELECT ul.email, firstname, lastname, login_id
FROM user_login ul
JOIN users u
ON ul.email = e.email
WHERE u.email = ${email};