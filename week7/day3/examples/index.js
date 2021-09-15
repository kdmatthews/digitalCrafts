const Sequelize = require("sequelize");
const { Users } = require("./models")
console.log(Users);
const express = require('express');
const app = express();
const PORT = 3011;

app.use(express.json());
// .create()
// .findAll()
// .findbyPk()
// .update()
// .destroy()




// CREATE DATA
app.post("/create_users", async(req, res) => {
    // const { firstName, lastName, email } = req.body
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const newUser = await Users.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
    });
    res.send(`Inserted New User with ${newUser.firstName} ${newUser.id}`
);
});




// READ DATA
app.post("/get_users", async(req, res) => {
    // const { firstName, lastName, email } = req.body
    
    const users = await Users.findAll();
    res.send(users)
});

app.post("/get_users_by_lastname", async(req, res) => {
    // const { firstName, lastName, email } = req.body
    
    const users = await Users.findAll({
        attributes:["lastName"],
    });
    res.send(users)
});

app.post("/get_users/:id", async(req, res) => {
    // const { firstName, lastName, email } = req.body
    
    const user = await Users.findByPk(req.params.id);
    res.send(user)
});




// UPDATE DATA
app.post("/update_users/:id", async(req, res) => {
    const user = await Users.update(req.body, {
        where: {
            id:req.params.id
        }
    });
    res.send(user)
});


// DELETE DATA
app.post("/delete_users/:id", async(req, res) => {
    const user = await Users.destroy({
        where: {
            id:req.params.id
        }
    });
    res.send('deleted');
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));
