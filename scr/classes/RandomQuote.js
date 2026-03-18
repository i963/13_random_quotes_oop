import quotes from "../data/quotes.js";
import MathUtils from "../utils/math.js";
import Quote from "./Quote.js";

class RandomQuote {
	// static method for returning new example of quotes
  static getRandomQuote() {
    // Choose random quote from data base + form new object of quote + return random quote
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
}

export default RandomQuote;
