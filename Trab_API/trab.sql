CREATE DATABASE loja_dsapi;
USE loja_dsapi;

CREATE TABLE produtos (
	id int not null auto_increment,
    nome varchar(100) not null,
    preco double,
    quantidade double,
    categoria_id int,
	primary key (id),
    foreign key(categoria_id) references categorias(id)
);

CREATE TABLE categorias(
	id int not null auto_increment,
    nome varchar(100) not null,
    primary key (id)
);

CREATE TABLE cidades (
	id int not null auto_increment,
    nome varchar(100) not null,
    primary key (id)
);

CREATE TABLE clientes (
	id int not null auto_increment,
    nome varchar(100) not null,
    altura double,
    nascimento date,
    cidade_id int,
    primary key (id),
    foreign key(cidade_id) references cidades(id)
);

CREATE TABLE pedidos (
	id int not null auto_increment,
    horario datetime not null,
	endereco varchar(200),
    cliente_id int,
    primary key (id),
    foreign key(cliente_id) references clientes(id)
);

CREATE TABLE pedidos_produtos (
	pedido_id int not null,
    produto_id int not null,
    preco double,
    quantidade double,
    foreign key(pedido_id) references pedidos(id),
    foreign key(produto_id) references produtos(id)
);


INSERT INTO categorias VALUES (null, "Bebidas");
INSERT INTO cidades VALUES (null, "Porto Alegre");

