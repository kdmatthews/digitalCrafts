require('dotenv').config()

const token = process.env.API_TOKEN;
console.log(token)
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
    "https://mxakcphctxajogkuteth.supabase.co", token);
const app = express();
const PORT = 3001;

app.use(express.json());




app.post('/createStudent', async (req, res) => {

    const { data, error } = await 
    supabase.from('studentData').insert([req.body]);
    res.send(console.log("I'm running"));
})

app.get('/createStudent', async (req, res) => {

    const { data, error } = await 
    supabase.from('studentData').select();
    res.send(data);
})

app.put('/updateStudent/:studentId', async (req, res) => {
    const id = req.params.studentId
    const { data, error } = await supabase
    .from('studentData')
    .update(req.body)
    .match({id:id})
    res.send(data);
})

app.delete('/deleteStudent/:studentId', async (req, res) => {
    const id = req.params.studentId
    const { data, error } = await supabase
    .from('studentData')
    .delete()
    .match({id:id});
    res.send(data);
})


app.listen(PORT, console.log(`Listening on port ${PORT}.`))
