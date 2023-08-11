const express = require('express');
const { fetchKeyword } = require('./fetch');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));


// GET INDEX PAGE
app.get('/', async (req, res) => {
    res.render('index');
})


// Search for items by keyword
app.post('/', async (req, res) => {
    const { keyword, sortBy } = req.body;

    const products = await fetchKeyword(keyword, sortBy);

    products.forEach(async (p) => {
        
    })



    res.render('index', { products: products, keyword: keyword, sortBy: sortBy });
})


app.listen(3000, console.log('Listening in 3000'));