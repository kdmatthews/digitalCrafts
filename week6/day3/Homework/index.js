require('dotenv').config()
const token = process.env.API_TOKEN;
const url = process.env.URL;

const express = require("express");
const app = express();
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(url, token);
const PORT = 3000;

app.use(express.json());

app.post('/createStock', async (req, res) => {
    const { data, error } = await 
    supabase.from('Stocks').insert([req.body])
    res.send("It went through")
})


app.listen(PORT, console.log(`Listening at port ${PORT}`))