drop database portfolio;
create database portfolio;
use portfolio;

create table adm (
email varchar(50) not null,
nome varchar(50) not null,
senha varchar(20) not null
);

create table webpage (
id_page int primary key auto_increment,
page_name varchar(20) not null
);

create table info (
id_info int primary key auto_increment,
phrase varchar(150),
author varchar(40),
descricao varchar(500) not null,
about varchar(1000),
img1 longblob,
img2 longblob,
id_page int not null,
constraint foreign key (id_page) references webpage(id_page)
);

create table folder (
id_folder int primary key auto_increment,
title varchar(40) not null,
subtitle varchar(50) not null,
descricao varchar(500) not null,
img longblob
);

create table card (
id_card int primary key auto_increment,
title varchar(40) not null,
subtitle varchar(50) not null,
descricao varchar(500) not null,
link varchar(150) not null,
img longblob,
id_folder int not null,
constraint foreign key (id_folder) references folder(id_folder)
);

insert into adm values
("mila.olisantos@gmail.com", "Milena", "adm123");

insert into webpage (page_name) values
("Home"),
("Projetos"),
("Formação"),
("Currículo"),
("Contato");

insert into info (phrase, author, descricao, about, id_page) values
("Um pau para toda a obra não é um mestre de nada, mas muitas vezes melhor do que um mestre de uma só.", "William Shakespeare", "descrição .", "sobre .", 1);

insert into folder (title, subtitle, descricao) values
("Sites para Desktop e/ou Celular", "Projetos do SENAI-SP", "Sites para Desktop e/ou Celular"),
("Aplicativos para Celular", "Projetos do SENAI-SP", "Aplicativos para Celular"),
("Atividades e Testes", "Projetos do SENAI-SP", "Todos os sites já feitos por mim durante o curso, demonstrando minha evolução acadêmica conforme o tempo."),
("Projetos em Andamento", "Projetos do SENAI-SP", "Projetos em Andamento");

insert into card (title, subtitle, descricao, link, id_folder) values
("Café Sabor e Alma", "Landing Page", "Página principal que promove uma cafeteria, trazendo formas do cliente entrar em contato com o estabelecimento para fazer um pedido, deixar feedbacks e ver o cardápio.", "https://dalgonafox.github.io/HTML/cafeteria/home.html", 1);