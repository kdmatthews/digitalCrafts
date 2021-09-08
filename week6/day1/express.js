const express = require('express');
const app = express();
const PORT = 3003

app.post('/', (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});

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


app.listen(PORT, console.log(`I'm on port ${PORT}`))

