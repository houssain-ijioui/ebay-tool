require('dotenv').config();
const Ebay = require('ebay-node-api');


const ebay = new Ebay({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET
});

const classs = 'vi-txt-underline';

async function fetchKeyword(keyword, sortBy) {
    var sort;
    if (sortBy === "price") {
        sort = "CurrentPriceHighest"
    } else if (sortBy === "watchs") {
        sort = "WatchCountDecreaseSort"
    }

    const data = await ebay.findItemsByKeywords({
        keywords: keyword,
        sortOrder: sort
    });

    return data[0].searchResult[0].item;
};



module.exports = { fetchKeyword };