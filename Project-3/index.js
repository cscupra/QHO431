const express = require('express');

const app = express();

app.get("/", (req,res) => {

    res.send("<h1><Welcome to the Home Page!</h1>");
})

app.get("/about", (req,res) => {

    res.send("<h1><Welcome to the About Page!</h1>");
})

app.get("/search:it", (req,res) => {

    res.send("<h1><Welcome to the Search Page!</h1>");
})

https://www.google.co.uk/search?q=it


app.listen(5000, () => { console.log("Server Started")});

