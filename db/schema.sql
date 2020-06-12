drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers(
    id int auto_increment not null,
    burger_name varchar(255),
    devoured boolean,
    primary key(id)
);

insert into burgers(burger_name, devoured)
values('Mushroom Swiss Burger', false);

insert into burgers(burger_name, devoured)
values('Baconator Burger', false);

insert into burgers(burger_name, devoured)
values("Noah's Arc Burger", false);

insert into burgers(burger_name, devoured)
values('Arnold SwarzenEgger Burger', false);

select * from burgers;