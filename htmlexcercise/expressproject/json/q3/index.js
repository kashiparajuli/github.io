const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
app.use(session({ secret: "Salt123!" }));

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(express.json());

app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

const productList = [{
    id: 1, productName: "computer", price: 3000, description: "windows"
},
{ id: 2, productName: "speaker", price: 500, description: "Medium" },
{ id: 3, productName: "keyboard", price: 200, description: "Medium" },
{ id: 4, productName: "mouse", price: 40, description: "Medium" }
];

app.use('/', (req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

app.get('/', (req, res) => {
    res.render('index', { products: productList, count: req.session.cart.length });
});
app.post('/addtoCart', (req, res) => {
    console.log(req.body.name);

    let cartList = req.session.cart;

    let present = false;
    for (let p of cartList) {
        if (p.name === req.body.name) {
            p.price += parseInt(req.body.price);
            p.quantity++;
            present = true;
        }
    }
    if (!present) {
        req.session.cart.push({
            name: req.body.name,
            price: parseInt(req.body.price),
            quantity: 1

        });
    }
    res.send({ count: req.session.cart.length });
    res.end();
    // console.log(req.session.cart);
    // res.redirect(303, '/cart');
});

app.get('/cart', (req, res) => {
    // console.log(req.session.cart);
    res.render('cart.ejs', {
        'products': req.session.cart
    });
});

app.listen(3000);

