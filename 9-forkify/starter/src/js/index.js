import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';
import Recipe from './models/Recipe';

/*Global state
-search object
-Current recipe
-Shopping list obeject
-liked recipes */
const state = {};

const controlSearch =  async () => {
    const query = searchView.getInput();
    //console.log(query); 

    if (query){
        state.search = new Search (query);

        //prepare ui
        searchView.cleatInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            await state.search.getResults();

            //render results on ui
            clearLoader();
            searchView.renderResults(state.search.result)
        }catch {
            alert('something wrong with the seartch.');
            clearLoader();
        }
    }


}

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e =>{
    const btn = e.target.closest('.btn-inline');
    if (btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage)

       // console.log (goToPage)
    }
});

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    console.log(id);
    if (id) {
        //Prepare ui for changes
        //create new recipe object 
        
        state.recipe = new Recipe(id);
        //get recipe data
       // window.r = state.recipe //testing
        try {
            await state.recipe.getRecipe();
            state.recipe.parseIngredients(); 
            //calculate serbings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            //render recipe
        }catch(error){
            alert ('Error processing recipe');
        }
    }
};


['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));