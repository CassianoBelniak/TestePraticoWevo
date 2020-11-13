use testepraticowevo;

-- drop table Users;
-- select * from Users;

create table Sexes(
    id integer primary key,
    description varchar(20)
);

insert into Sexes(id, description) values ("Feminino",1),("Masculino",2),("Não informado", 3);

create table Users(
    id integer primary key auto_increment,
    name varchar(200),
    CPF varchar(11),
    email varchar(100),
    phone varchar(20),
    sexId integer,
    birthday date,
	foreign key (sexId) references Sexes(id)
);