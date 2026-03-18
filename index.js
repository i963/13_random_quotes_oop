import RandomQuotesApp from "./scr/classes/RandomQuotesApp.js";

new RandomQuotesApp();

// import { displayCurrentQuote} from "./scr/handlers/currentQuote.js";
// import {toggleFavoriteCard, showFavoriteBtn, hideFavoriteBtn, addFavoriteCard, removeFavoriteCard} from './scr/handlers/favorites.js';
// import {localStorageSetItem, localStorageGetItem } from './scr/utils/localStorage.js';
// import {getRandomQuote} from './scr/handlers/randomQuote.js';
// import {removeObjectFromArrayById} from './scr/utils/arrays.js';

// const CURRENT_QUOTE_KEY = 'currentQuote';
// const FAVORITE_QUOTES_KEY = 'favoriteQuotes'
// let currentQuote = null;
// const favoriteQuotes = [];

// const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
// const favoritesContainer = document.getElementById("favorites-container");
// // Hiding fav icon
// hideFavoriteBtn();
// quoteFavoriteBtn.addEventListener("click", () => toggleCurrentQuote());

// function removeFavoriteQuote(id){
// 	if (id === currentQuote.id){
// 	  toggleCurrentQuote()
// 	} else {
// 		removeObjectFromArrayById(favoriteQuotes, id)
// 		removeFavoriteCard(id);
// 		localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes)
// 	}
// 	//   const currentQuote = document.querySelector("[data-current-quote-id]")
// 	//   const currentQuoteId = currentQuote.dataset.currentQuoteId;
// }

// function toggleCurrentQuote(){
// // CURRENT QUOTE UPDATE
// 	//Sync toggle isFavorite and current quote
// 	currentQuote.isFavorite = !currentQuote.isFavorite;
// 	// toggle fav icon star
// 	// toggleFavoriteBtnIcon();
// 	localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
// 	// FAVORITE QUOTES UPDATE
// 	// Change local storage favoriteQuotes array
// 	if(currentQuote.isFavorite){
// 	favoriteQuotes.push({...currentQuote})
// 	} else{
// 		removeObjectFromArrayById(favoriteQuotes, currentQuote.id)
// 	}
// 	// UPD UI by showing fav card or removing fav card
// 	toggleFavoriteCard(currentQuote, favoritesContainer);
// 	// Save fav quotes in local storage
// 	localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes)
// }

// function setCurrentQuote(quote){
// // SET CURRENT QUOTE IN DISPLAY
// 	// Create copy of the quotes array
// 	currentQuote = {...quote};
// 	// Check if ID of randomQuote is among IDs of the favorite quotes
// 		if (favoriteQuotes.find((favoriteQuote) => favoriteQuote.id === currentQuote.id)){
// 			currentQuote.isFavorite = true;
// 		} else {
// 			currentQuote.isFavorite = false;
// 		}
// 	// Show current quote in display
// 	displayCurrentQuote(currentQuote);
// 	showFavoriteBtn(currentQuote.isFavorite)
// 	// Save current quote in local storage
// 	localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
// }

// function init(){
// 	const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
// 	if (favoriteQuotesFromStorage) {
// 	favoriteQuotesFromStorage.forEach((quote) => {
// 		favoriteQuotes.push(quote);
// 		addFavoriteCard(quote, favoritesContainer);
// 		});
// 	}
// 	const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
// 	if (currentQuoteFromStorage){
// 		// Show current quote from local store
// 		setCurrentQuote(currentQuoteFromStorage);
// 	}
// }

// window.addEventListener('load', init);

// export {quoteFavoriteBtn, setCurrentQuote, removeFavoriteQuote};
