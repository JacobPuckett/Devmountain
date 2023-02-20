CREATE TABLE orders(
	order_id SERIAL PRIMARY KEY,
	person_id SERIAL,
  product_name VARCHAR(40) NOT NULL,
  product_price FLOAT NOT NULL,
  quanitiy FLOAT NOT NULL
);

INSERT INTO orders (product_name,product_price,quanitiy)
VALUES ('the raven',99.99,2),
('vintage bicyles',7.99,6),
('gaff deck',12.80,2),
('the system',89,1),
('vintage bicyles',7.99,3);


SELECT *
FROM orders;

SELECT SUM(quanitiy) 
FROM orders;


SELECT SUM(quanitiy*product_price)

FROM orders

SELECT person_id, (quanitiy * product_price)AS cart_total
FROM orders;
