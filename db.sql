DROP DATABASE IF EXISTS account_book;
CREATE DATABASE account_book;
USE account_book;
CREATE TABLE records (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  date DATETIME NOT NULL,
  amount INT NOT NULL,
  subject VARCHAR(255),
  type ENUM('expanse', 'income'),
  PRIMARY KEY(id)
);
INSERT INTO records (name, date, amount, subject, type)
values
  ('Johnny', '2018-7-04', 12000, 'lunch', 'expanse');
INSERT INTO records (name, date, amount, subject, type)
values
  (
    'Peter',
    '2018-04-04',
    23000,
    'dinner',
    'expanse'
  );
INSERT INTO records (name, date, amount, subject, type)
values
  ('Charles', '2012-12-04', 12000, 'aws', 'expanse');
INSERT INTO records (name, date, amount, subject, type)
values
  ('Paul', '2014-07-04', 1000, 'subway', 'expanse');
INSERT INTO records (name, date, amount, subject, type)
values
  ('Janny', '2008-7-04', 22000, 'brunch', 'expanse');
INSERT INTO records (name, date, amount, subject, type)
values
  (
    'Mike',
    '2019-7-04',
    12000,
    'notebook',
    'expanse'
  );
INSERT INTO records (name, date, amount, subject, type)
values
  ('Sam', '2019-01-04', 299000, 'salary', 'income');