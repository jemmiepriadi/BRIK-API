#BRIK-API

BRIK-API
Created with MySQL database; First create database with name 'brik-test' Then run the app via terminal with command 'npm start' or 'node index.js' go to http://127.0.0.1:3000/ for the url

PRODUCTS
http://127.0.0.1:3000/products -> get, post http://127.0.0.1:3000/products/:id => getById, Delete by Id, Update By Id => e.g http://127.0.0.1:3000/products/1

CUSTOMERS
http://127.0.0.1:3000/customers -> get, post http://127.0.0.1:3000/customers/:id => getById, Delete by Id, Update By Id => e.g http://127.0.0.1:3000/customers/1

ORDERS
http://127.0.0.1:3000/Orders -> get, post http://127.0.0.1:3000/Orders/:id => getById, Delete by Id, Update By Id => e.g http://127.0.0.1:3000/Orders/1

Orders and Customers have many to one relationship where one customer can have multiple orders. 

Order and Products have many to many relationship where one order, you can order many products. And one product, can have multiple orders for it.

