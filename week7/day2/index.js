const express = require('express');
const app = express();
const PORT = 3003;
const creds = require("./db");

app.use(express.json());

app.get("/getFuberCustomers", (req, res) => {
    creds.connect((err,client,release) => {
        if(err){
            return console.error("Error", err.stack)
        }
        client.query('SELECT * FROM customers', (err,result) => {
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result.rows);
        });
    });
});



app.get("/getFuberOrders", (req, res) => {
    creds.connect((err,client,release) => {
        if(err){
            return console.error("Error", err.stack)
        }
        client.query('SELECT * FROM orders', (err,result) => {
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result.rows);
        });
    });
});


app.get("/getFuberCars", (req, res) => {
    creds.connect((err,client,release) => {
        if(err){
            return console.error("Error", err.stack)
        }
        client.query('SELECT * FROM cars', (err,result) => {
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result.rows);
        });
    });
});

app.listen(PORT, console.log(`Listening at port ${PORT}`));