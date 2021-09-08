const express = require('express');
const app = express();
const PORT = 3000;


const characters = [
    { name: "Jordan", address: "123 Main St", state: "GA" },
    { name: "Whitney", address: "123 Main St", state: "FL" },
    { name: "Tay", address: "123 Main St", state: "TX" },
    { name: "Michael", address: "23 Tomball St", state: "WA" },
    { name: "Calvin", address: "2020 RightLeft St", state: "PH" },
    { name: "Kendall", address: "465 Right St", state: "LA" },
    { name: "Patrick", address: "123 Colorado St", state: "TX" },
  ];

const es6Renderer = require("express-es6-template-engine");
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html')


app.get('/', (req, res) => {
    
    res.render(`data`, {
        partials: {
            head: '/partials/head'
        },
        locals: {
            characters,
        }
    }
    )
})
app.use(express.static('partials'));
app.listen(PORT, console.log(`Listening at port ${PORT}`));
