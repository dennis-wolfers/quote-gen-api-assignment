let quote = document.getElementById("quote");
let author = document.getElementById("author");

let getQuote = () => {
  fetch("https://talaikis.com/api/quotes/random/")
    .then(resp => resp.json())
    .then(data => {
      quote.innerHTML = data.quote;
      author.innerHTML = data.author;
    });
};

getQuote();

document.getElementById("quoteButton").addEventListener("click", getQuote);
