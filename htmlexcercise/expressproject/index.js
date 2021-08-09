
var express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});
app.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
});
app.listen(4000);

