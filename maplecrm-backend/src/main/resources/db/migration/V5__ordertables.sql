CREATE TABLE customer (
	id bigserial,
	address text,
	birthdate date,
	city text,
	description text,
	email text,
	gender text,
	name text,
	phone text,
	state text,
	CONSTRAINT customer_pkey PRIMARY KEY (id)
);

CREATE TABLE product (
	id bigserial,
	name text,
	price numeric(19,2),
	quantity_in_stock numeric(19,2) NULL,
	CONSTRAINT product_pkey PRIMARY KEY (id)
);

CREATE TABLE orderitem (
	id bigserial,
	price numeric(19,2) ,
	quantity numeric(19,2) ,
	order_id bigint,
	product_id bigint,
	CONSTRAINT order_item_pkey PRIMARY KEY (id)
);

CREATE TABLE orders (
	id bigserial,
	created_at timestamp NULL,
	created_by_id int8 NULL,
	customer_id int8 NULL,
	CONSTRAINT orders_pkey PRIMARY KEY (id)
);

ALTER TABLE orderitem ADD CONSTRAINT fk_orderitem_product FOREIGN KEY (product_id) REFERENCES product(id);
ALTER TABLE orderitem ADD CONSTRAINT fk_orderitem_order FOREIGN KEY (order_id) REFERENCES orders(id);

ALTER TABLE orders ADD CONSTRAINT fk_order_createdby FOREIGN KEY (created_by_id) REFERENCES users(id);
ALTER TABLE orders ADD CONSTRAINT fk_order_customer FOREIGN KEY (customer_id) REFERENCES customer(id);
