import React from 'react';
import './App.css';

// var assert = require('assert');
// var quoteScraper = require('./');

// var quoteScraper = require('quote-scraper');

// // quote-scraper gives you an array with famous quote from someone.
// // Just give the name (case insensitive)
// // and you will get quotes in english.
// console.log(quoteScraper('Agatha Christie'));

// console.log('test for es');
// quoteScraper('mark twain', 'es');

const Quote = require('inspirational-quotes');

// returns any random quote

function App() {
  return(Quote.getRandomQuote());
}

export default App
