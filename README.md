
<img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" />

# Welcome to   MapleCRM 

<img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" /><img src="https://i.ibb.co/Ycc9Wkx/logo.png"  height="30" />
</center>



### Angular 8 SPA with Spring Boot Backend and Postgres Database
The domain models a simple CRM with Users, Customers, Products, Orders and Order Items.

#### Frontend
Angular 8 spa that uses the following practices:
- The core/shared/features folder structure
- The Smart Container > View Component way of creating components
- BEM naming with SASS
- No css frameworks
- Angular lazy loading for smaller bundles
- Interceptors for jwt token
- Immutable data structures

#### Backend
Spring Boot 2 API with :
 - Spring Security with JWT tokens, OAuth2 social login and html login form
 - Controller > Service > Repository structure
 - JPA and Postgres
 - Users with Roles for authorization

#### Testing
All modules are tested with Cypress e2e tests.

#### Swagger 
for API docs

#### OAuth
This project uses oauth2 for social login
To have an overview of the authentication flow , see these diagrams
![enter image description here](https://i.stack.imgur.com/PBlvj.png)

---- 
## Functional Requirements

### Auth
- Login
- Register
- Reset Password

### Dashboard
- Account Overview with monthly and quarterly sales and customers
- Last Orders

### Customers
 - Create 
 - Update
 - Delete
 - Search

### Products
 - Create 
 - Update
 - Delete
 - Search
 
#### Users
 - Update user's name and image
 - Add and Remove roles for authorization

#### Orders and Order Items
 - Create Order
 - Add Item
 - Remove Item
 - Calculate Order
 - Send Notification of order shipped
