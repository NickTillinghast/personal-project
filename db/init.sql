-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS gallery;


CREATE TABLE users 
(
user_id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL,
password TEXT NOT NULL,
email TEXT UNIQUE NOT NULL
);

INSERT INTO users (username, password, email)
VALUES ('amber tillinghast', 'amber123', 'amber@amber.com');

CREATE TABLE gallery (
gallery_id SERIAL PRIMARY KEY,
gallery_name TEXT NOT NULL,
gallery_date TEXT NOT NULL,
gallery_link TEXT NOT NULL,
gallery_image TEXT NOT NULL,
user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO gallery ( gallery_name, gallery_date, gallery_link, gallery_image, user_id)
VALUES ('Kaylee and James', 'October 3 2017', 'https://nicktillinghastphotography.pixieset.com/kayleeandjames/','https://res.cloudinary.com/dqpatwz6c/image/upload/v1572645978/No%20Db%20images/bd05a7zji5nn61ldzkun.jpg', 17);





