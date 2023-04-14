-- MySQL Script generated by MySQL Workbench
-- Wed Aug 31 17:04:07 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema u995521796_analisaitape
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema u995521796_analisaitape
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `u995521796_analisaitape` DEFAULT CHARACTER SET utf8 ;
USE `u995521796_analisaitape` ;

-- -----------------------------------------------------
-- Table `u995521796_analisaitape`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u995521796_analisaitape`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` TEXT NOT NULL,
  `document_type` VARCHAR(100) NOT NULL DEFAULT 'cpf',
  `document` VARCHAR(100) NOT NULL,
  `birth_date` DATE NOT NULL,
  `profile_pic` LONGBLOB NULL DEFAULT NULL,
  `terms` INT NOT NULL DEFAULT 1 COMMENT '0 - Denied; 1 - Accepted;',
  `token` TEXT NULL DEFAULT NULL,
  `token_email` TEXT NULL DEFAULT NULL,
  `status` INT NOT NULL DEFAULT 1 COMMENT '0 - Inactive; 1 - Active',
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u995521796_analisaitape`.`administrators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u995521796_analisaitape`.`administrators` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `login` VARCHAR(100) NOT NULL,
  `password` TEXT NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `partner` INT NOT NULL DEFAULT 0 COMMENT '0 - No; 1 - Yes',
  `status` INT NOT NULL DEFAULT 1 COMMENT '0 - Inactive; 1 - Active',
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u995521796_analisaitape`.`permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u995521796_analisaitape`.`permissions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `action` VARCHAR(100) NULL DEFAULT NULL,
  `icon` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u995521796_analisaitape`.`administrators_permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u995521796_analisaitape`.`administrators_permissions` (
  `administrator_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  INDEX `fk_administrators_permissions_administrators_idx` (`administrator_id` ASC),
  INDEX `fk_administrators_permissions_permissions1_idx` (`permission_id` ASC),
  CONSTRAINT `fk_administrators_permissions_administrators`
    FOREIGN KEY (`administrator_id`)
    REFERENCES `u995521796_analisaitape`.`administrators` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrators_permissions_permissions1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `u995521796_analisaitape`.`permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u995521796_analisaitape`.`feedbacks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u995521796_analisaitape`.`feedbacks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `feedback` TEXT NOT NULL,
  `reply` TEXT NULL DEFAULT NULL,
  `status` INT NOT NULL DEFAULT 0 COMMENT '0 - In progress; 1 - Answered; 2 - Canceled',
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u995521796_analisaitape`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u995521796_analisaitape`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `status` INT NOT NULL DEFAULT 1 COMMENT '0 - In progress; 1 - Answered; 2 - Canceled',
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u995521796_analisaitape`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u995521796_analisaitape`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `partner_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `img` LONGBLOB NULL DEFAULT NULL,
  `text` TEXT NOT NULL,
  `status` INT NOT NULL DEFAULT 1 COMMENT '0 - In progress; 1 - Answered; 2 - Canceled',
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_articles_categorys1_idx` (`category_id` ASC),
  INDEX `fk_articles_administrators1_idx` (`partner_id` ASC),
  CONSTRAINT `fk_articles_categorys1`
    FOREIGN KEY (`category_id`)
    REFERENCES `u995521796_analisaitape`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articles_administrators1`
    FOREIGN KEY (`partner_id`)
    REFERENCES `u995521796_analisaitape`.`administrators` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;