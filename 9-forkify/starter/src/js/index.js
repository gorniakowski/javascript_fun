import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

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
        
        await state.search.getResults();

        //render results on ui
        console.log (state.search.result);
    }


}

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});

