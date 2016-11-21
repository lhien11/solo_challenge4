-- Database name
sigma
-- Document your create tables SQL here
CREATE TABLE treats (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    description text,
    pic varchar(255)
);


/*
CREATE TABLE treats (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    description text,
    pic varchar(255)
);

INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');


INSERT INTO treats (name, description, pic)
VALUES ('Goldfish', 'A delicious goldfish', '/assets/goldfish.jpg'),
('potato', 'Mmmm potato', '/assets/potato.jpg');

DROP TABLE treats;
*/
