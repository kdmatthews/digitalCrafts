const express = require('express');
const app = express();
const PORT = 3009
const creds = require("./db");
// middleware
//  all our req get converted into json
app.use(express.json());
// Create
app.post('/create_todo', (req, res) =>{
    res.send("/create_todo");
})
// Read
app.get('/get_todo', (req, res) =>{
    // res.send("/get_todo");
    creds.connect((err, client, release) => {
        // write your if err statment so you know if you have errors
        // This is where you write your raw sequal
        client.query("SELECT * FROM todoitems",(err,result)=>{
            console.log(err);
            console.log(result);
            if(err){
                res.status(400).send(err.stack)
            }
            res.status(200).send(result.rows);
        });
    });
});
// Update
app.put('/update_todo', (req, res) =>{
    res.send("/update_todo");
})
// Delete
app.post('/delete_todo', (req, res) =>{
    res.send("/delete_todo");
})


app.listen(PORT, console.log(`Listening at port ${PORT}`));