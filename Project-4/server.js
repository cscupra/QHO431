'use strict';
const http = require(http);
const express = require(express);
const mysql = require(mysql);

let port = 3000;

const app = express();

app.set('view engine', 'ejs'); //specify that you are using EJS templating and not HTML files
app.use(express.static('public')); //specify where all your static files


app.get("/", (req,res) => {
    res.render('index');
});

app.get("/houses", (req,res) => {
    res.render('houses');
});

app.get("/contact", (req,res) => {
    res.render('contact');
});



app.listen(port, () => {console.log('Server has started!')});
