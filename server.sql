--CREATE DATABASE db_inventario;
--USE db_inventario;

CREATE TABLE tb_objetos(
    id integer primary key,
    name varchar(120),
    description varchar(300),
    cant integer,
    date varchar(120)
);