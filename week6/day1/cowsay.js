const cowsay = require("cowsay");
const express = require('express');
const app = express();
const PORT = 3007

app.post('/sendCowUserName',(req, res) => {
    res.send(cowsay.say({
        text: "Adding cow user",
        r: true
        
 })
    )

});

app.post('/sendCowAppointment', (req, res) => {
    res.send(cowsay.think({
        text: "Setting up cow appointment",
        r: true,
    }))
});

app.get('/getCowUserName', (req, res) => {
    res.send(cowsay.say({
        text: "Adding cow user",
        r: true
    }))
});

app.get('/getCowAppointment', (req, res) => {
    res.send(cowsay.think({
        text: "Setting up cow appointment",
        r: true
    }))
});

app.delete('/deleteCowUser', (req, res) => {
    res.send(console.log("deleted cow user"))
})

app.listen(PORT, console.log(`I'm on port ${PORT}`))