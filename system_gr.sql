SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `endereco` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cnpj` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ie` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `telefone` int(255) NOT NULL,
  `email` varchar(255) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

CREATE TABLE IF NOT EXISTS `despesas` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `valor` varchar(255) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `entregas` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `produto` varchar(255) NOT NULL,
  `quantidade` varchar(255) NOT NULL,
  `valor` varchar(255) NOT NULL,
  `total` varchar(255) NOT NULL,
  `data_entrega` date NOT NULL,
  `data_vencimento` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `estoque` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `inserted_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `fornecedores` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `movimentacao` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `data` date NOT NULL,
  `valor` varchar(255) NOT NULL,
  `tipo` int(11) NOT NULL COMMENT '1= entrada, 0 = saida'
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
DELIMITER $$
CREATE TRIGGER `atualiza_estoque` AFTER INSERT ON `movimentacao`
 FOR EACH ROW BEGIN
			set @id_prod = NEW.id_produto;
			SET @qtd = NEW.quantidade;
			SET @status = NEW.tipo;
			IF @status = 1 THEN
				UPDATE estoque SET quantidade = quantidade + @qtd WHERE id_produto = @id_prod;
			END IF;
			IF @status = 0 THEN
				UPDATE estoque SET quantidade = quantidade - @qtd WHERE id_produto = @id_prod;
			END IF;
			 
		END
$$
DELIMITER ;

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `fornecedor` int(100) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `retiradas` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) CHARACTER SET latin1 NOT NULL,
  `valor` varchar(255) CHARACTER SET latin1 NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

CREATE TABLE IF NOT EXISTS `vendas` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `cliente` varchar(255) CHARACTER SET latin1 NOT NULL,
  `produto` varchar(255) CHARACTER SET latin1 NOT NULL,
  `quantidade` int(255) NOT NULL,
  `valor` varchar(255) CHARACTER SET latin1 NOT NULL,
  `total` varchar(255) CHARACTER SET latin1 NOT NULL,
  `metodo` varchar(255) CHARACTER SET latin1 NOT NULL,
  `data_velha` varchar(255) CHARACTER SET latin1 NOT NULL,
  `data` date NOT NULL,
  `status` int(255) NOT NULL DEFAULT '1' COMMENT '0=pago 1=nao pago',
  `data_pagamento` varchar(255) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1022 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `despesas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `entregas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `estoque`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `fornecedores`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `movimentacao`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `retiradas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `vendas`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=147;
ALTER TABLE `despesas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
ALTER TABLE `entregas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
ALTER TABLE `estoque`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
ALTER TABLE `fornecedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
ALTER TABLE `movimentacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=34;
ALTER TABLE `retiradas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=170;
ALTER TABLE `vendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1022;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
