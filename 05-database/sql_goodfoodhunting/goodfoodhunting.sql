CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY, 
  name VARCHAR(200),
  image_url VARCHAR(400)
);

SELECT name FROM dishes;
SELECT id, name, image_url FROM dishes;
SELECT * FROM dishes;

INSERT INTO dishes (name, image_url) VALUES ('pudding', 'https://www.justonecookbook.com/wp-content/uploads/2016/09/Japanese-Pudding-II-600x900.jpg');

INSERT INTO dishes (name, image_url) VALUES ('chicken beef', 'http://www.retailhellunderground.com/.a/6a00e54f10a098883401bb092b7ea8970d-pi');

-- DELETE FROM dishes WHERE name = 'chicken beef';
-- DELETE FROM dishes WHERE id = 2;

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  content VARCHAR(400) NOT NULL,
  dish_id INTEGER NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE CASCADE 
);

-- DROP TABLE comments;

INSERT INTO comments 
(content, dish_id)
values 
('great', 8);
