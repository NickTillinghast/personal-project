SELECT * FROM gallery
JOIN users ON gallery.user_id = users.user_id
WHERE users.user_id = $1;