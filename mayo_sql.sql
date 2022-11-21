create database mayo;
use mayo;

create table user (
	userid varchar(300) primary key,
    userpw varchar(300) not null,
    username varchar(300) not null,
    userphone varchar(300) unique,
    useraddr varchar(1000) not null
);

create table myinfo(
	usercode int primary key,
    mypost varchar(300),
    mylike varchar(300),
    mycomment varchar(3000),
    userid varchar(300),
    constraint fk_userid foreign key(userid) references user(userid)
);

drop table post;



create table post(
	postnumber int primary key auto_increment,
    postname varchar(300) not null,
    posttime datetime not null,
     userid varchar(300),
    constraint fk_userid2 foreign key(userid) references user(userid)
);

CREATE TABLE picture(
    picnumber int primary key auto_increment,
    piclike varchar(300),
    piccomment varchar(300),
    pictime datetime not null,
    userid varchar(300),
    constraint fk_userid3 foreign key(userid) references user(userid)
);
create table comment(
     comment_number int primary key auto_increment,
     comment_info varchar(3000),
     comment_time datetime,
     userid varchar(300),
    constraint fk_userid4 foreign key(userid) references user(userid)
);
