import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}
const controlRcipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpiner();
    resultsView.update(model.getSearchResultPage());

    // 1. Updating bookmark
    bookmarksView.update(model.state.bookmarks)
    
    // 2. Loading recepie
    await model.loadRecipe(id);
    
    // 3. Rendering recepie
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError();
  }
};

const constrolSearchResult = async function () {
  try {
    resultsView.renderSpiner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render initial pagination
    // resultsView.render(model.state.search.results)
    resultsView.render(model.getSearchResultPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render New pagination
  resultsView.render(model.getSearchResultPage(goToPage));

  // 2) Render New pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks)
};

const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks)
}

const constrolAddRecipe = async function(newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpiner()

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe)
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe)

    // Success message
    addRecipeView.renderMessage()

    // Render bookmark view
      bookmarksView.render(model.state.bookmarks)

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`)

    // Close form window
    setTimeout(function() {
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC * 1000)
  } catch (error) {
    console.log(error);
    addRecipeView.renderError(error.message)
  }
}

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks)
  recipeView.addHandlerRender(controlRcipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(constrolSearchResult);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(constrolAddRecipe)
};
init();
