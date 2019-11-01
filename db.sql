DROP DATABASE IF EXISTS account_book;

CREATE DATABASE account_book;

USE account_book;

CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  date DATETIME NOT NULL,
  amount INT NOT NULL,
  subject VARCHAR(255),
  PRIMARY KEY(id)
);

INSERT INTO
  books (name, date, amount, subject)
values
  ('Johnny', '2018-7-04', 12000, 'lunch');

INSERT INTO
  books (name, date, amount, subject)
values
  (
    'Peter',
    '2018-04-04',
    23000,
    'dinner'
  );

INSERT INTO
  books (name, date, amount, subject)
values
  ('Charles', '2012-12-04', 12000, 'aws');

INSERT INTO
  books (name, date, amount, subject)
values
  ('Paul', '2014-07-04', 1000, 'subway');

INSERT INTO
  books (name, date, amount, subject)
values
  ('Janny', '2008-7-04', 22000, 'brunch');

INSERT INTO
  books (name, date, amount, subject)
values
  (
    'Mike',
    '2019-7-04',
    12000,
    'notebook'
  );

INSERT INTO
  books (name, date, amount, subject)
values
  ('Sam', '2019-01-04', 299000, 'salary');