const express = require('express');
const app = express();
const PORT = 3002;
// const student = { name: "Pamela" };
const students = [
    { name: "Sneezy Cameron" },
    { name: 'Jordan' },
    { name: 'Jenny' },
];
// This lets your server serve html. Must do this. 
const es6Renderer = require("express-es6-template-engine")
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html')

app.get('/', (req, res) => {
    // let list = `<ul>`
    // for(let student of students){
    //     list += `<li>
    //         <p> ${student.name}</p>
    //     </li>
    //     `;
    // }
    // list += `</ul>`
    // console.log(list)
    res.render(`home`, {
       
        locals: {
            students,
        }
    });
})

app.listen(PORT, console.log(`Listening on port ${PORT}`));

