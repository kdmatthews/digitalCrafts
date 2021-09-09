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
    supabase.from('Stocks').insert(req.body)
    res.send("It went through")
}) 

app.delete('/deleteStock/:stockId', async (req, res) => {
    const id = req.params.stockId
    const { data, error } = await 
    supabase.from('Stocks').delete().match({ id:id });
    res.send(data)
})
app.get('/readStock', async (req, res) => {
    const { data, error } = await supabase
    .from('Stocks')
    .select()
    res.send(data)
})

app.put('/updateStock/:stockId', async (req, res) => {
    const id = req.params.stockId
    const { data, error } = await supabase
    .from('Stocks')
    .update(req.body)
    .match({id:id});
    res.send(data);
})

app.get('/readStock/:stockId', async (req, res) => {
    const id = req.params.stockId
    const { data, error } = await supabase
    .from('Stocks')
    .select().match({ id:id });
    res.send(data)
})
app.get('/stockCriteria/:stockCriteria', async (req, res) => {
    const criteria = req.params.stockCriteria
    const { data, error } = await supabase
    .from('Stocks')
    .select(criteria)
    res.send(data)
})

app.listen(PORT, console.log(`Listening at port ${PORT}`))