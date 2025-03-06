<<<<<<< HEAD
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
=======
CREATE database golftracker;
>>>>>>> 68929b51d4b31585e6bdac62ee2fc2aa64e091c3
