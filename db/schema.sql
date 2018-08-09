CREATE DATABASE IF NOT EXISTs burger_db;
USE burger_db;

CREATE TABLE burger (
id Int NOT NULL auto_increment,
Hamburger  varchar(50)  NOT NULL,
eaten boolean DEFAULT false,
primary key(id)
);