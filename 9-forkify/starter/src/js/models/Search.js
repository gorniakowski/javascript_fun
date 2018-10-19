import axios from 'axios'

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        try {
             const key = '5d73cad3321edf16595b9aff5b9c8dd4'
             const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
             this.result = res.data.recipes
            //s console.log (this.result);
        }catch (error) {
            alert(error);
        }
     }
}

//https://www.food2fork.com/api/search


