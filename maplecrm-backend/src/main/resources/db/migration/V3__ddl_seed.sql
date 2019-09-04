alter table users alter column email_verified set default false;

INSERT INTO users (email, name, password, provider, provider_id)
VALUES('admin@maplecrm.com', 'Admin', '$2a$10$4ACr4T33F2KMQRPGbyI1ze1BvMZZR/eSzCUPQKxvqKmxrzqae6CZu', 'local', 'local');