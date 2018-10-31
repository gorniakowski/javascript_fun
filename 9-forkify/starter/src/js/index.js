import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as LikesView from './views/likesView';
import {elements, renderLoader, clearLoader} from './views/base';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';



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
        }catch{
            
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
        recipeView.clearRecipe();

        renderLoader(elements.recipe);
        
        //Highlight selected
        
       if(state.search) searchView.highlightSelected(id);
        //create new recipe object 
        state.recipe = new Recipe(id);
        //get recipe data
       // window.r = state.recipe //testing
        try {
            await state.recipe.getRecipe();
            state.recipe.parseIngredients(); 
            window.r = state.recipe;
            //calculate serbings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        }catch(error){
            console.log(error)
            alert ('Error processing recipe');
        }
    }
};


['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


//LIST CONTROLLER

const controlList = () => {
    //if there is no list create new one
    if (!state.list) state.list = new List();

    //add each ingredient to the list and user interface
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

elements.shopping.addEventListener('click', e =>{
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //handle delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')) {
        //delete from state
        state.list.deleteItem(id);
        //dete from UI
        listView.deleteItem(id);

      //count update  
    }else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);

    }

});


//LIKE CONTROLER
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentId = state.recipe.id;
    if(!state.likes.isLiked(currentId)){
        //ad like to the state
        const newLike = state.likes.addLike(
            currentId,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
            );
        //toggle  the like button
        LikesView.toggleLikeBtn(true);
        //add like to the ui
        LikesView.renderLike(newLike);
    }else {

        //remove like to the state
        state.likes.deleteLike(currentId);
        //toggle  the like button
        LikesView.toggleLikeBtn(false);
        //remove like to the ui
        LikesView.deleteLike(currentId); 
        console.log(state.likes)
    }
    LikesView.toggleLikeMenu(state.likes.getNumLikes());
}   
//resore liked recipes when the page loads
window.addEventListener ('load', () => {
    state.likes = new Likes ();
    //restore likes
    state.likes.readStorage();
    //toggle button
    LikesView.toggleLikeMenu(state.likes.getNumLikes());

    //render existing likes
    state.likes.likes.forEach(like => LikesView.renderLike(like));


});

//Handling recipe button clicks
elements.recipe.addEventListener('click', e=> {
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    }
    if(e.target.matches('.btn-increase, .btn-increase *')){
        state.recipe.updateServings('inc');   
        recipeView.updateServingsIngredients(state.recipe);
    }else if (e.target.matches('.recipe__btn--add, .recipe__btn *')) {
        controlList();
    }else if(e.target.matches('.recipe__love, .recipe__love *')){
        //like controller
        controlLike();
    }
   // console.log(state.recipe);
});





