
const cowsay = require('cowsay');
const express = require('express');
const app = express();
const PORT = 3000

app.post('/moo', (req, res) => {
    console.log(req);
    res.send(console.log(cowsay.say({
        text : "eat more chikin",
        e : "o_O",
        T : ": "
    
})
    )
    );
});

app.post("/", (req, res) => {
    res.send("Home");
})
app.delete("/delete", (req, res) => {
    res.send('put');
})
app.listen(PORT, console.log(`I'm on port ${PORT}`))


