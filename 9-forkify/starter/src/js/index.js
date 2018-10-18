const key = '5d73cad3321edf16595b9aff5b9c8dd4'
//https://www.food2fork.com/api/search

import axios from 'axios';
import { get } from 'http';


async function getResults(query) {
   try {
        const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = result.data.recipes
        console.log (recipes);
   }catch (error) {
       alert(error);
   }
}
getResults('tomato pasta');