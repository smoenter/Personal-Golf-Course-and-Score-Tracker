IF DATABASE EXISTS golftracker
DROP DATABASE golftracker;

CREATE DATABASE golftracker;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE scoreCard (
  id SERIAL PRIMARY KEY,
  course VARCHAR(255) NOT NULL,
  score INT NOT NULL,
  user_id INT REFERENCES users(id)
);