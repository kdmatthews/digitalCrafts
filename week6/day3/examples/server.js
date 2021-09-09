const express = require("express");
const app = express();
const PORT = 3001
// middleware startes
app.use(express.json());

// middleware ends
app.post("/sendUserData", (req, res) => {
    req.body
})