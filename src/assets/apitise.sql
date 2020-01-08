-- Adminer 4.7.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `apitise`;
CREATE DATABASE `apitise` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `apitise`;

DROP TABLE IF EXISTS `cocktail`;
CREATE TABLE `cocktail` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `cocktail_ingredient`;
CREATE TABLE `cocktail_ingredient` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `id_cocktail` int(4) unsigned NOT NULL,
  `id_ingredient` int(4) unsigned NOT NULL,
  `quantity` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id_cocktail` (`id_cocktail`),
  KEY `id_ingredient` (`id_ingredient`),
  CONSTRAINT `cocktail_ingredient_ibfk_1` FOREIGN KEY (`id_cocktail`) REFERENCES `cocktail` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cocktail_ingredient_ibfk_2` FOREIGN KEY (`id_ingredient`) REFERENCES `ingredient` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `ingredient`;
CREATE TABLE `ingredient` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2019-12-03 14:11:35