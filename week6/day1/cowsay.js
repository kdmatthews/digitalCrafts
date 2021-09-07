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

// Training Exercises Small

// Hello World
app.post('/', (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});
// Add Routes
app.get("/cats", (req, res) => {
    res.send(`<h2>Meow!</h2>`);
})

app.put("/dogs", (req, res) => {
    res.send(`<h2>Woof!</h2>`);
})

app.delete("/cats_and_dogs", (req, res) => {
    res.send(`<p>Dogs and cats living together... mass hysteria!</p>`);
})

app.get("/getNames", (req, res) => {
    console.log(req);
    res.send(`<h1>hello</h1>`);
})
// Add Routes with Parameters

const friends = [
    {
        name: 'Luke',
        handle: '@luke'
    },
    {
        name: 'Ahsoka',
        handle: '@ahsoka'
    },
    {
        name: 'Han',
        handle: '@han'
    },
    {
        name: 'Leia',
        handle: '@leia'
    },
];
// const db = require ('./db');
// const greet = require('./db');
app.get('/greet/:handle', (req, res) => {
    const { handle } = req.params;
    res.send(`Hello, ${handle}! May the force be with you!`)
});
// Send an HTML Response
app.get('/greet/:handle', (req, res) => {
    const { handle } = req.params;
    res.send(`<h1>Hello, ${handle}! May the force be with you!</h1>`)
});

app.listen(PORT, console.log(`I'm on port ${PORT} woo hoo`))

