CREATE TABLE produto (
  codigo SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  metrica VARCHAR(50),
  descricao VARCHAR(255),
  categoria INT NOT NULL,
  CONSTRAINT FK_CATEGORIA_PRODUTO FOREIGN KEY (categoria) REFERENCES categoria_produto (codigo)
);

CREATE TABLE categoria_produto (
  codigo int(11) NOT NULL AUTO_INCREMENT,
  categoria varchar(255) DEFAULT NULL,
  PRIMARY KEY (codigo)
)