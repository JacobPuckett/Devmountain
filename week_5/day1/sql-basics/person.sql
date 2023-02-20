CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    age FLOAT NOT NULL,
    height FLOAT NOT NULL,
    city VARCHAR (40),
    favorite_color VARCHAR(40),

);

INSERT INTO person (name,age,height,city,favorite_color)
VALUES ('jacob', 23,183,'springville','purple'),
('kyle',32,179,'Melbourne','white'),
('lukas',25,181,'Dallas','blue'),
('Anderw',31,187,'Salt Lake City','red'),
('Donald',21,176,'Detroit','purple')



SELECT height, name
FROM person
ORDER BY height DESC;

SELECT height, name
FROM person
ORDER BY height;


SELECT age, name
FROM person
ORDER BY age DESC

SELECT age, name
FROM person
WHERE age > 20;


SELECT age, name
FROM person
WHERE age = 18;


SELECT age, name
FROM person
WHERE age < 20 OR age > 30;

SELECT *
FROM person
WHERE age <> 27;

SELECT *
FROM person
WHERE favorite_color <> 'red';

SELECT *
FROM person
WHERE favorite_color <> 'red' AND favorite_color <> 'blue';


 SELECT *
FROM person
WHERE favorite_color = 'orange' OR favorite_color = 'green';

SELECT *
FROM person
WHERE favorite_color IN ('orange','green','blue')


SELECT *
FROM person
WHERE favorite_color IN ('yellow','purple');