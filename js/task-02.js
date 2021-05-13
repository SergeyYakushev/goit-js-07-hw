import ingredients from './data/ingredients.js'

const listIngredEl = document.querySelector('#ingredients');


const makeIngredientsList = items => {

    return items.map(item => {

        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = item;

        return ingredientItem;
    });
};

const elements = makeIngredientsList(ingredients);

listIngredEl.append(...elements);



























































































































































































































































































































































































































