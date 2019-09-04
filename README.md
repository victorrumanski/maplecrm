# maplecrm

Angular 8 SPA with Spring Boot Backend

-----

login page - /auth/login
  login with facebook
  login with google
  login with twitter
  login with email and password

singup page - /auth/signup
  signup with facebook
  signup with google
  signup with twitter
  signup with name, email and password -> user receives email with confirmation link

signup confirmation page - /auth/confirmsignup
  shows message thanking for confirming
  then redirects to login page

forgot password page /auth/forgot
  send reset password to email provided
  when link is clicked, the change password page should appear with pass and confirm pass

** only authenticated users can see the next pages **

reset password page /forgot
  inputs: current pass, new pass,  new pass

profile page /user/profile
  show user details

home page /home
  show charts and table with deals of the user

customers page /customers
  show customers table and crud

deals page /deals
  show deals table with crud

users crud page /users
  only admins can see this page
  admin user can list and change user's data like role and name

----

This project uses oauth2 for social login

to have a overview of the authentication flow , look at these diagrams

https://i.stack.imgur.com/PBlvj.png
https://developers.google.com/+/images/server_side_code_flow.png


---- 
other requirements
frontend
  - component tests with karma and jasmine
  - e2e tests with protractor

backend
  - api tests for controllers, services and repositories
  - swagger api docs
