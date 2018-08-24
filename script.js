let quote = document.getElementById("quote");
let author = document.getElementById("author");
let cat = document.getElementById("cat");
let isList = JSON.parse(localStorage.getItem("list"));
let catList = isList ? isList : [];

let getQuote = () => {
  fetch("https://talaikis.com/api/quotes/random/")
    .then(resp => resp.json())
    .then(data => {
      quote.innerHTML = data.quote;
      author.innerHTML = data.author;
      cat.innerHTML = data.cat;
      addToCatList(data.cat);
    });
};
getQuote();

document.getElementById("quoteButton").addEventListener("click", getQuote);

const addToCatList = newCat => {
  if (!catList.includes(newCat)) {
    catList.push(newCat);
    localStorage.setItem("list", JSON.stringify(catList));
  }
};
