UPDATE gallery
SET gallery_name = $2, gallery_date = $3, gallery_link = $4, gallery_image = $5, user_id = $6
WHERE gallery_id = $1;

SELECT * FROM gallery
WHERE gallery_id = $1;








