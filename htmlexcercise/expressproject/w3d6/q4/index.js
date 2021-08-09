const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/css', express.static(path.join(__dirname, 'css')));
const productList = [{
    id: 1, productName: "computer", price: 3000, description: "windows"
},
{ id: 2, productName: "speaker", price: 500, description: "Medium" },
{ id: 3, productName: "keyboard", price: 200, description: "Medium" },
{ id: 4, productName: "mouse", price: 40, description: "Medium" }]

const shoppingcartList = [{
    name: "Computer", price: 4000, quantity: 20
},
{ name: "Laptop", price: 3000, quantity: 30 },
{ name: "Mouse", price: 40, quantity: 40 }
]
app.get('/', (req, res) => {
    res.render('index', { products: productList });
});
app.get('/cartList', (req, res) => {
    res.render('shoppingcart', { products: shoppingcartList });
})
app.post('/addtoCart', (req, res) => {
    console.log(req.body.id);
    res.redirect(303, '/');

});
app.listen(3000);

