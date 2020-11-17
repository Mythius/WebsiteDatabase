DROP DATABASE WEBDATA;
CREATE DATABASE WEBDATA;
USE WEBDATA;

CREATE TABLE players(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(25),
	pswd varchar(25),
	PRIMARY KEY(id)
);

CREATE TABLE games(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(25) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE scores(
	id int NOT NULL AUTO_INCREMENT,
	player_id int NOT NULL,
	game_id int NOT NULL,
	score int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (player_id) REFERENCES players(id),
	FOREIGN KEY (game_id) REFERENCES games(id)
);
