SELECT first_name, last_name, city
FROM employee
WHERE city LIKE '%Calgary%';

SELECT birth_date, first_name, last_name
FROM employee
ORDER BY birth_date DESC
LIMIT 1;

SELECT first_name,last_name,employee_id
FROM employee
WHERE first_name LIKE '%Nancy%';

2
SELECT first_name, last_name, city
FROM employee
WHERE city LIKE '%Lethbridge%';