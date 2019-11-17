CREATE DATABASE IF NOT EXISTS cows;

USE cows;

CREATE TABLE IF NOT EXISTS cows(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description varchar(240),
  PRIMARY KEY(id) 
);