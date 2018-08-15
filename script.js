let quote = document.getElementById("quote");
let author = document.getElementById("author");

const url = "https://talaikis.com/api/quotes/random/";

fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    console.log(data.quote + " by: " + data.author);
  });
