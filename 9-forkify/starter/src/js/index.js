import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/*Global state
-search object
-Current recipe
-Shopping list obeject
-liked recipes */
const state = {};

const controlSearch =  async () => {
    const query = searchView.getInput();
    console.log(query); 

    if (query){
        state.search = new Search (query);

        //prepare ui
        searchView.cleatInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        await state.search.getResults();

        //render results on ui
        clearLoader();
        searchView.renderResults(state.search.result)
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

        console.log (goToPage)
    }
});

