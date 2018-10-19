import Search from './models/Search';

/*Global state
-search object
-Current recipe
-Shopping list obeject
-liked recipes */
const state = {};

const controlSearch =  async () => {
    const query = 'pizza'; //todo;

    if (query){
        state.search = new Search (query);

        //prepare ui
        
        await state.search.getResults();

        //render results on ui
        console.log (state.search.result);
    }


}

document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});

