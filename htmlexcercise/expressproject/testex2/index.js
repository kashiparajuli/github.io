const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/result', (req, res) => {
    res.send(`!<DOCTYPE html>
              <html lang="en">
                  <head>
                  <meta charset="utf-8"/>
                  <title>My form</title>
                  </head>
                  <body>
                  <form method="post" action="/result">
                  <label>Name</label>
                  <input type="text" name="name"/>
                  <label>Age</label>
                  <input type="text" name="age"/>
                  <button>Submit query</button>
                  </form>
                  </body>
                  </html>    
    `);
    app.post('/result', (req, res) => {
        let name = req.body.name;
        let age = req.body.age;
        res.send(`Welcome name is ${name} and age is ${age}`)
    });
});
app.listen(3000);