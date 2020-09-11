/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//reult will be: series of quotes displaying when button pushed

/*** 
 
***/
var quotes = [ 
  {
  //quoteOne and quoteTwo from https://www.goodhousekeeping.com/life/
  quote:'"Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women."', 
  source: 'Maya Angelou'
  },
  {
  quote:'"You deserve to be here. You deserve to exist. You deserve to take up space in this world of men."',
  source: 'Mackenzi Lee'
  },
 // quoteThree-quoteFive from https://www.codeofliving.com/blog/
 {
    quote:'"Every moment is a fresh beginning."', 
    source:'T.S Eliot'
 },
 {
  quote:'"And still, I rise."',
  source: 'Maya Angelou', 
  citation: 'And Still I Rise', 
  year: 1978
 },
{
  quote:'"Turn your wounds into wisdom."',
  source: 'Oprah Winfrey'
}
];


/***
 * `getRandomQuote` function
 * creates function to keep picking random quotes from above for length of array
 * formula for function from https://css-tricks.com/snippets/javascript/select-random-item-array/
***/
function getRandomQuote () {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
  console.log(getRandomQuote);
}
getRandomQuote()

//print quote to get random quote to be visible on screen in html format
function printQuote () {  
  var randomObject = getRandomQuote();

  //HTML snippet from Treehouse instructions
  var paragraph = '<p class="quote">' + randomObject.quote + '</p>'; paragraph += '<p class="source">' + randomObject.source;

  if ("citation" in randomObject) {
    paragraph += '<span class="citation">' + randomObject.citation + '</span>';
  }

  if ("year" in randomObject) {
    paragraph += '<span class="year">' + randomObject.year + '</span>' + '</p>';
  }

  document.getElementById('quote-box').innerHTML = paragraph;
}

  printQuote();

  document.getElementById('load-quote').addEventListener("click", printQuote, false);
