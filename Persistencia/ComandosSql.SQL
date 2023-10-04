
-- Script para criar a tabela produto
CREATE TABLE produto (
  codigo SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  metrica VARCHAR(50),
  descricao VARCHAR(255),
  categoria INT NOT NULL,
  CONSTRAINT FK_CATEGORIA_PRODUTO FOREIGN KEY (categoria) REFERENCES categoria_produto (codigo)
);

-- Script para criar a tabela categoria_produto
CREATE TABLE categoria_produto (
  codigo int(11) NOT NULL AUTO_INCREMENT,
  categoria varchar(255) DEFAULT NULL,
  PRIMARY KEY (codigo)
)

-- Script para criar a tabela pessoas
CREATE TABLE pessoas (
    cpf VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(255),
    endereco VARCHAR(255),
    telefone VARCHAR(15)
);

-- Script para povoar a tabela pessoas
INSERT INTO pessoas (cpf, nome, endereco, telefone) VALUES
('12345678901', 'Fulano Silva', 'Rua A, 123', '(11) 98765-4321'),
('23456789012', 'Ciclana Oliveira', 'Av. B, 456', '(22) 12345-6789'),
('34567890123', 'Beltrano Souza', 'Travessa C, 789', '(33) 54321-8765');
