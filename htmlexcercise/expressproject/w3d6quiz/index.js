const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
var listItem = [];

app.get("/", (req, res) => {
    let html = "<ul>";
    for (let i = 0; i < listItem.length; i++) {
        html = html + `<li>${listItem[i]}</li>`;
    }
    html = html + "</ul><a href='/add'>Add</a>";
    res.send(html);
});

app.get("/add", (req, res) => {
    res.send(`<form method="POST" action="/add-item"><input type="text" name="item"/>
    <input type="submit" value="Add"/></form>`);
});

app.post("/add-item", (req, res) => {
    listItem.push(req.body.item);
    res.redirect("/");
});

app.listen(3000);