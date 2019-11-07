SELECT gallery_id, gallery_name, gallery_date, gallery_link, gallery_image, user_id
FROM gallery
WHERE gallery_id = $1;