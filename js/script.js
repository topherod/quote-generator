'use strict';

// array of quotes
var quotes = [
	{
		quote: "The best teacher is experience and not through someone's distorted point of view.",
		source: "Jack Kerouac",
		citation: "On the Road",
		year: "1957",
		tags: ["learning", "education"]
	},
	{
		quote: "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
		source: "Henry David Thoreau,",
		citation: "Walden",
		year: "1854",
		tags: ["goals", "dreams", "aspirations"]
	},
	{
		quote: "Sometimes it's a little better to travel than to arrive.",
		source: "Robert Pirsig",
		citation: "Zen and the Art of Motorcycle Maintenance",
		year: "1974",
		tags: ["travel", "philosophy"]
	},
	{
		quote: "There is no one right way to live.",
		source: "David Quinn",
		citation: "Ishmael",
		year: "1992",
		tags: ["life", "philosophy"]
	},
	{
		quote: "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.",
		source: "J.D. Salinger",
		citation: "The Catcher in the Rye",
		year: "1951",
		tags: ["maturity"]
	},
	{
		quote: "Sometimes you have to watch somebody love something before you can love it yourself. It is as if they are showing you the way.",
		source: "Donald Miller",
		citation: "Blue Like Jazz",
		year: "2003",
		tags: ["love", "philosophy"]
	},
	{
		quote: "To be interesting, be interested.",
		source: "Dale Carnegie",
		citation: "How to Win Friends and Influence People",
		year: "1936",
		tags: ["life", "self"]
	}
];

// create an array of quotes that have been returned
var usedQuotes = [];
var intervalQuote = setInterval(printQuote, 30000);

// get random color
function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

// create getRandomQuote function
function getRandomQuote() {
	// select a random quote object from the quotes array
	var randomQuoteIndex = Math.floor(Math.random() * quotes.length);

	var currentQuote = quotes.splice(randomQuoteIndex, 1)[0];
	usedQuotes.push(currentQuote);
	if ( quotes.length === 0 ) {
		quotes = usedQuotes;
		usedQuotes = [];
	}
	// return the randomly selected quote object
	return currentQuote;
}
// create function that prints the quote to the page
function printQuote() {
	// call the getRandomQuote function and store the returned quote object in a variable
	var returnedQuote = getRandomQuote();

	// construct a string using the different properties of the quote object 
	var quoteString = '';
	quoteString += '<p class="quote">' + returnedQuote.quote + '</p>';
	quoteString += '<p class="source">' + returnedQuote.source;
	// only if there is a citation
	if (returnedQuote.citation) {
		quoteString += '<span class="citation">' + returnedQuote.citation + '</span>';
	}
	// only if there is a year
	if (returnedQuote.year) {
		quoteString += '<span class="year">' + returnedQuote.year + '</span>';
	}
	quoteString += '</p>';
	// only if there are tags
	if (returnedQuote.tags) {
		quoteString += '<p class="tags">';
		for (var i = 0; i < returnedQuote.tags.length; i++) {
			quoteString += '<span class="tag">' + returnedQuote.tags[i] + '</span>';
		}		
		quoteString += '</p>';
	}
	//displays the final HTML string to the page.
	document.getElementById('quote-box').innerHTML = quoteString;
	document.getElementById('body').style.background = getRandomColor();
	clearTimeout(intervalQuote);
	intervalQuote = setInterval(printQuote, 30000);
}
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
