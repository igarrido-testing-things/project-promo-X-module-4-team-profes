CREATE TABLE `projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `desc` TINYTEXT NULL,
  `technologies` VARCHAR(255) NULL,
  `demo` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `projects` (`title`, `desc`, `technologies`, `demo`) VALUES ('Calculadora freelance', 'Calculadora online gratuita para saber el precio por hora que deberías cobrar como mínimo siendo autónomo.', '[\"React\", \"HTML\", \"CSS\"]', 'https://calculadorafreelance.com/');

INSERT INTO `projects` (`title`, `desc`, `technologies`, `demo`) VALUES ('Adakitten', 'Listado con CRUD de gatitos súper-monos.', '[\"HTML\", \"Sass\", \"JS\"]', 'https://adakittens.es/');