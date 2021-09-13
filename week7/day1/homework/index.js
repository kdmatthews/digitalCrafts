const express = require("express");
const creds = require("./db");
const app = express();
const db = require('./db');


const PORT = 3007;

app.use(express.json());

app.get("/getRestaurantData", (req, res) =>{
    creds.connect((err, client, release) => {
        if(err){
            return console.error("Error getting connected.")
        }
        client.query('SELECT * FROM restaurants', (err,result) => {
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result.rows);
        });

    });
});

app.post('/getRestaurantData', (req, res) =>{
    console.log(req.body.name);
    console.log(req.body.id);
    console.log(req.body.stars);

    creds.connect((err, client, release) => {
        if(err){
            return console.error("Error getting connected.")
        }
        client.query(`INSERT INTO restaurants (id, name, stars) VALUES(${req.body.id}, '${req.body.name}', ${req.body.stars})`, (err,result) => {
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result);
        });
    });
});


// movies

app.get("/getMovieData", (req, res) =>{
    creds.connect((err, client, release) => {
        if(err){
            return console.error("Error getting connected.")
        }
        client.query('SELECT * FROM movies', (err,result) => {
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result.rows);
        });

    });
});

app.post('/getMovieData', (req, res) =>{
    console.log(req.body.name);
    console.log(req.body.id);
    console.log(req.body.lead);

    creds.connect((err, client, release) => {
        if(err){
            return console.error("Error getting connected.")
        }
        client.query(`INSERT INTO movies (name, lead) VALUES('${req.body.name}', '${req.body.lead}')`, (err,result) => {
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result);
        });
    });
});



app.listen(PORT, console.log(`Listening at port ${PORT}.`))