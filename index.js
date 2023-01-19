var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

// connection configurations
var dbConn = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'brik-test'
});
// connect to database
dbConn.connect(function(err) {
    if(err) throw err;
    console.log("connected");
    var sql = 'CREATE TABLE IF NOT EXISTS customers (id int(11) NOT NULL AUTO_INCREMENT,name varchar(200)  ,created_at datetime  DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY(id)); CREATE TABLE IF NOT EXISTS products (id int(11) NOT NULL AUTO_INCREMENT,name varchar(200) , description varchar(200) ,price int(255) ,created_at datetime  DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY(id)); CREATE TABLE IF NOT EXISTS orders (id int(11) NOT NULL AUTO_INCREMENT,name varchar(200), customer_id int(11), product_id int(11), PRIMARY KEY(id), FOREIGN KEY(customer_id) REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE, FOREIGN KEY(product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE);'
    dbConn.query(sql, function(err, result) {
        if(err) throw err;
        console.log("created table")
    })
});

//products
const postProducts = async (req, res) => {
    if(!{...res.body}){
       res.status(404).json({ error:true, message: 'no request' });
    }
    dbConn.query("INSERT INTO products SET ? ", { ...req.body }, function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results, status: 200})
    });
}

const getProductsAll = async (req, res)=>{
    dbConn.query("SELECT * FROM products", function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error , status: 500});
        res.status(200).json({success : true, data: results, status: 200})
    });
}

const getProductsById = async (req, res) => {
    if(!req.params.id){
        res.status(422).json({ error:true, message: 'no request' , status: 422});
    }
    dbConn.query("SELECT * FROM products WHERE id = ?", req.params.id ,function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error, status: 500 });
        res.status(200).json({success : true, data: results, status:200})
    });
}

const updateProducts = async (req, res) => {
    if (!res.body) {
        res.status(404).json({ error:true, message: 'no request' });
    }

    dbConn.query("UPDATE products SET ? WHERE id = ?", [{ ...req.body },req.body.id], function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results})
    });
}

const deleteProducts = async (req, res) =>{
    dbConn.query("DELETE FROM products where id = ? ", [req.body.id], function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results})
    });
}

//orders
const postOrders = async (req, res) => {
    if(!{...res.body}){
       res.status(404).json({ error:true, message: 'no request' });
    }
    dbConn.query("INSERT INTO products SET ? ", { ...req.body }, function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results, status: 200})
    });
}

const getOrderssAll = async (req, res)=>{
    dbConn.query("SELECT * FROM products", function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error , status: 500});
        res.status(200).json({success : true, data: results, status: 200})
    });
}

const getordersById = async (req, res) => {
    if(!req.params.id){
        res.status(422).json({ error:true, message: 'no request' , status: 422});
    }
    dbConn.query("SELECT * FROM orders WHERE id = ?", req.params.id ,function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error, status: 500 });
        res.status(200).json({success : true, data: results, status:200})
    });
}

const updateOrders = async (req, res) => {
    if (!res.body) {
        res.status(404).json({ error:true, message: 'no request' });
    }

    dbConn.query("UPDATE orders SET ? WHERE id = ?", [{ ...req.body },req.body.id], function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results})
    });
}


const deleteOrders = async (req, res) =>{
    dbConn.query("DELETE FROM products where id = ? ", [req.body.id], function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results})
    });
}

//customers
const postCustomers = async (req, res) => {
    if(!{...res.body}){
       res.status(404).json({ error:true, message: 'no request' });
    }
    dbConn.query("INSERT INTO customers SET ? ", { ...req.body }, function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results, status: 200})
    });
}

const getCustomersAll = async (req, res)=>{
    dbConn.query("SELECT * FROM customers", function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error , status: 500});
        res.status(200).json({success : true, data: results, status: 200})
    });
}

const getoCustomersById = async (req, res) => {
    if(!req.params.id){
        res.status(422).json({ error:true, message: 'no request' , status: 422});
    }
    dbConn.query("SELECT * FROM customers WHERE id = ?", req.params.id ,function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error, status: 500 });
        res.status(200).json({success : true, data: results, status:200})
    });
}

const updateCustomers = async (req, res) => {
    if (!res.body) {
        res.status(404).json({ error:true, message: 'no request' });
    }

    dbConn.query("UPDATE customers SET ? WHERE id = ?", [{ ...req.body },req.body.id], function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results})
    });
}


const deleteCustomers = async (req, res) =>{
    dbConn.query("DELETE FROM customers where id = ? ", [req.body.id], function (error, results, fields) {
        if (error) res.status(500).json({ error:true, message: error });
        res.status(200).json({success : true, data: results})
    });
}

//route
//products route
app.get('/products', getProductsAll);
app.get('/products/:id', getProductsById)
app.post('/products', postProducts)
app.put('/products/:id', updateProducts)
app.delete('/products/:id', deleteProducts)

//orders route
app.get('/orders', getOrderssAll);
app.get('/orders/:id', getordersById)
app.post('/orders', postOrders)
app.put('/orders/:id', updateOrders)
app.delete('/orders/:id', deleteOrders)

//customers route
app.get('/customers', getCustomersAll);
app.get('/customers/:id', getoCustomersById)
app.post('/customers', postCustomers)
app.put('/customers/:id', updateCustomers)
app.delete('/customers/:id', deleteCustomers)

// set port
app.listen(3000, function () {
console.log('Node app is running on port 3000');
});
module.exports = app;