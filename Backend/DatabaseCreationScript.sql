use testepraticowevo;

-- drop table Users;
-- select * from Users;
-- select * from Sexes;

create table Sexes(
    id integer primary key,
    description varchar(20) not null
);

insert into Sexes(id, description) values (1, "Feminino"),(2, "Masculino"),(3, "Não informado");

create table Users(
    id integer primary key auto_increment,
    name varchar(200) not null,
    CPF varchar(11) not null,
    email varchar(100) not null,
    phone varchar(20) not null,
    sexId integer not null,
    birthday date not null,
	foreign key (sexId) references Sexes(id)
);