create table client
(
	  id   int auto_increment,
	  name varchar(255) null,
	  cnpj varchar(255) null,
	  ie   varchar(255) null,
	  constraint cliente_id_uindex
	  unique (id)
);

alter table client
  add primary key (id);

create table product
(
	  id   int auto_increment,
	  name varchar(255) null,
	  date datetime     null,
	  constraint produtos_id_uindex
	  unique (id)
);

alter table product
  add primary key (id);

create table sells
(
	  id           int auto_increment,
	  client_id    int      not null,
	  product_id   int      not null,
	  quantity     int      null,
	  price        int      null,
	  date         datetime null,
	  status       int      null,
	  payment_date datetime null,
	  constraint sells_id_uindex
	  unique (id),
	  constraint sells_client_id_fk
	  foreign key (client_id) references client (id),
	  constraint sells_product_id_fk
	  foreign key (product_id) references product (id)
);

alter table sells
  add primary key (id);

create table supplier
(
	  id   int auto_increment,
	  name varchar(255) null,
	  constraint supplier_id_uindex
	  unique (id)
);

alter table supplier
  add primary key (id);

create table maintenance
(
	  client_id   int      not null,
	  supplier_id int      not null,
	  product_id  int      not null,
	  date        datetime null,
	  comment     longtext null,
	  primary key (client_id, product_id, supplier_id),
	  constraint client_id
	  foreign key (client_id) references client (id),
	  constraint product_id_pk
	  foreign key (product_id) references product (id),
	  constraint supplier_id_pk
	  foreign key (supplier_id) references supplier (id)
);

create index maintenance_client_id_product_id_supplier_id_index
  on maintenance (client_id, product_id, supplier_id);

create table transactions
(
	  id        int auto_increment,
	  client_id int     not null,
	  value     decimal null,
	  constraint transactions_id_uindex
	  unique (id),
	  constraint transactions_client_id_fk
	  foreign key (client_id) references client (id)
);

alter table transactions
  add primary key (id);


