const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

const chefs = require("./chef.json")
app.get('/', (req, res) => {
    res.json({message:"running"})
})

app.get('/allData', (req, res) =>{
        res.send(chefs)
})

app.get("/allData/:id", (req, res) => {
    const _id = req.params.id;
    const selectedChefs = chefs.find((chef) => +chef.id === +_id);
    res.send(selectedChefs);
  });
  


app.listen(5000,() => {
    console.log('server running');
})