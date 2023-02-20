SELECT billing_country, count(*)
FROM invoice
GROUP BY billing_country;

SELECT count(*)
FROM invoice
WHERE billing_country = 'USA';

SELECT MAX(total)
FROM invoice;

SELECT min(total)
FROM invoice;

SELECT total
FROM invoice;
WHERE total > 5;

SELECT count (*)
FROM invoice
WHERE total < 5;

SELECT COUNT (*)
FROM invoice
WHERE billing_state in ('CA', 'TX', 'AZ');

SELECT AVG(total)
FROM invoice;

SELECT SUM(total)
FROM invoice;

UPDATE invoice
SET total = 24
WHERE invoice_id = 5;

DELETE 
FROM invoice
WHERE invoice_id = 1;