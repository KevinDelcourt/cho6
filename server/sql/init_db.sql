CREATE DATABASE sho6;

USE sho6;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) UNIQUE NOT NULL,
  password varchar(64) NOT NULL,
  email varchar(254) NOT NULL,
  presentation varchar(512),
  role varchar(20) NOT NULL
);

INSERT INTO users (username,password,email,role)
VALUES ('Admin','Admin','','ROLE_CREATEUR');

CREATE TABLE creations(
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(100) NOT NULL,
  file_path varchar(50),
  info varchar(512) 
)