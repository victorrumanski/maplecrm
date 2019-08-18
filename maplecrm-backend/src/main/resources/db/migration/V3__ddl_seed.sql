alter table users alter column email_verified set default false;

INSERT INTO users (email, name, password, provider, provider_id)
VALUES('admin@maplecrm.com', 'Admin', 'kkkkkkkkkk', 'local', 'local');