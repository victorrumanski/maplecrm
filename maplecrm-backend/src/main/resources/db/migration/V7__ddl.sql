alter table customer add column createdat date;

alter table customer add column createdby_id bigint;

ALTER TABLE customer ADD CONSTRAINT fk_customer_createdby FOREIGN KEY (createdby_id) REFERENCES users(id);
