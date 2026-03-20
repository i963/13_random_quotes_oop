import quotes from "../data/quotes.js";
import MathUtils from "../utils/math.js";
import Quote from "./Quote.js";
import config from '../../config.js';

class RandomQuote {
  // static method for returning new example of quotes
  static getRandomQuote() {
    // Choose random quote from data base + form new object of quote + return random quote
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  // Promise returned by the getRandomQuoteViaAPI function will be always fulfilled
  // Result of the fulfilled promise will be either Quote or undefined
  static async getRandomQuoteViaPublicAPI() {
    // const url = "https://quoteslate.vercel.app/api/quotes/random";
    const url = `${config.PUBLIC_API_URL}/quotes/random`;
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      // wait result of 2 promise
      const response = await fetch(url, options);
      // destruct object + form new quote from resolves promise
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
      // return undefined implicitly (resolves promise to undefined )
    }
  }

  static async getRandomQuoteViaOwnAPI(){
    // const url = "http://localhost:3000/quotes/random-single";
    const url = `${config.API_URL}/quotes/random-single`;
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const { id, text, author } = quote;
      return new Quote (id, text, author);
    } catch (error) {
        console.error(error);
    }
  }

}

export default RandomQuote;
