import RandomQuote from "./RandomQuote.js";
import Quote from './Quote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteAPIBtn = document.getElementById("random-quote-api-btn")
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;
    this.init();
  }
  // Showing random quote on display
  displayCurrentQuote() {
    const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
}

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async getRandomQuoteViaAPI(){
    // put code on pause still promise will be fulfilled
    const quoteViaAPI = await RandomQuote.getRandomQuoteViaAPI();
    // change current quote
    this.changeCurrentQuote(quoteViaAPI)
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote());
    this.randomQuoteAPIBtn.addEventListener("click", () => this.getRandomQuoteViaAPI());
  }
}

export default RandomQuotesApp;

