-- db/schema.sql
DROP DATABASE IF EXISTS streamism;

CREATE DATABASE streamism;


\c streamism

DROP TABLE IF EXISTS streamers;

CREATE TABLE streamers (
    id SERIAL PRIMARY KEY,
    username VARCHAR(200) UNIQUE NOT NULL,
    password_hash VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE platforms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  image TEXT NOT NULL,
  rated INTEGER NOT NULL,
  description VARCHAR(500),
  mo TEXT,
  link VARCHAR(100) UNIQUE
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  content VARCHAR(500),
  rating NUMERIC
  CHECK(rating >= 1 AND rating <= 5),
  created_at TEXT,
  updated_at TEXT,
  platform_id INTEGER REFERENCES platforms(id),
  streamer_id INTEGER REFERENCES streamers(id)
  ON DELETE CASCADE
);





