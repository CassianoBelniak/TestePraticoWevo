use testepraticowevo;

-- drop table Users;

create table Sexes(
    id integer primary key,
    description varchar(20)
);

create table Users(
    id integer primary key,
    name varchar(200),
    CPF varchar(11),
    email varchar(100),
    phone varchar(20),
    sexId integer,
    birthday date,
	foreign key (sexId) references Sexes(id)
);