SELECT u.email, hash_password, firstname, lastname, u.user_id
FROM user_login ul
JOIN users u
ON ul.email = u.email
WHERE u.email = ${email};