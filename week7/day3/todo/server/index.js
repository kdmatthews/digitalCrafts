const Sequelize = require("sequelize");
const { ToDo_List } = require("./models")
const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 3007;

app.use(express.json());
app.use(cors());

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'client');
app.set('view engine', 'html')


app.post("/createItem", async(req, res) => {
    const todo_item = req.body.todo_item;

    const newItem = await ToDo_List.create({
        todo_item:todo_item,
    });
    res.send(`Inserted New Item with ${newItem.todo_item} ${newItem.id}`)
});


app.post("/getItems", async(req, res) => {

    const items = await ToDo_List.findAll();
    res.send(items)
});

app.post("/updateItem/:id", async(req,res) => {
    const item = await ToDo_List.update(req.body, {
        where: {
            id:req.params.id
        }
    });
    res.send(item)
}); 

app.post('/deleteItem/:id', async(req, res) => {
    const item = await ToDo_List.destroy({
        where: {
            id:req.params.id
        }
    });
    res.send("Deleted")
})
app.listen(PORT, console.log(`Listening on port${PORT}`))