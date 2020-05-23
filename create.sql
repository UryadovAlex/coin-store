-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bootcamp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bootcamp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bootcamp`;
USE `bootcamp` ;

-- -----------------------------------------------------
-- Table `bootcamp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bootcamp`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(50) NOT NULL,
  `gender` ENUM('f', 'm') NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isAdmin` TINYINT(1) NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bootcamp`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bootcamp`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `qty` INT NOT NULL,
  `userId` INT NOT NULL,
  `coinId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  CONSTRAINT `cart_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `bootcamp`.`users` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 39
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bootcamp`.`coins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bootcamp`.`coins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `value` VARCHAR(45) NULL DEFAULT NULL,
  `year` INT NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `country` VARCHAR(45) NULL DEFAULT NULL,
  `metal` VARCHAR(45) NULL DEFAULT NULL,
  `shortDescription` TINYTEXT NULL DEFAULT NULL,
  `fullDescription` TEXT NULL DEFAULT NULL,
  `quality` VARCHAR(45) NULL DEFAULT NULL,
  `weight` DECIMAL(19,4) NULL DEFAULT NULL,
  `obverseLink` VARCHAR(255) NULL DEFAULT NULL,
  `reverseLink` VARCHAR(255) NULL DEFAULT NULL,
  `coinType` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 41
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
