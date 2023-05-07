const quotes = [
  {
    quote:
      "The only rule is don't be boring and dress cute whereever you go. Life is to short to blend in",
    author: "Paris Hilton",
  },
  {
    quote: "Life is short, and every moment is precious",
    author: "Gad Saad",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    author: "James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
