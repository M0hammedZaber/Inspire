import React from 'react';
import './App.css';
import '../src/pages/home.css';
// var assert = require('assert');
// var quoteScraper = require('./');

// var quoteScraper = require('quote-scraper');

// // quote-scraper gives you an array with famous quote from someone.
// // Just give the name (case insensitive)
// // and you will get quotes in english.
// console.log(quoteScraper('Agatha Christie'));

// console.log('test for es');
// quoteScraper('mark twain', 'es');

// inspirational NPM that works and returns any random quote

const Quote = require('inspirational-quotes');

function App() {
  return(Quote.getRandomQuote());
}

export default App

// motivational quote NPM that works in console log

// const quotes = require("success-motivational-quotes");

// console.log(quotes.getTodaysQuote());

// attempting to have motivational quote NPM not in console log 

// const getTodaysQuote = () => {
//   const length = data.length;
//   const number = Math.floor(Math.random() * length);
//   const todaysQuote = data[number];
//   return todaysQuote;
// };