import Vue from "vue";
import Vuex from "vuex";
import { GetterTree, MutationTree, ActionTree } from "vuex";
import { Recipe } from "./types";

Vue.use(Vuex);

const recipes = [
  {
    title: "Raspberry Icebox Cake",
    imgUrl: "https://bit.ly/2DkVWIa",
    rating: "3",
    instructions:
      "Buy jello, cool-whip, and grahmn crackers. Put everything in a pot and then look up the actual recipe."
  },
  {
    title: "Around the world oatmeal",
    imgUrl: "https://bit.ly/31a4tWj",
    rating: "2",
    instructions:
      "In a pot combine oatmeal, chocolate chunks, cayenne pepper, and milk. Over medium heat, cook for 10 minutes."
  },
  {
    title: "New Bacon-ings Burger",
    imgUrl: "https://bit.ly/311qTcs",
    rating: "1",
    instructions:
      "Make burger, add bacon, cheese optional. Enjoy your new bacon-ings"
  },
  {
    title: "Fig-eta Bout It Burger",
    imgUrl: "https://bit.ly/33fR1ms",
    rating: "4",
    instructions: "Cook burger to desired temperature, add fig sauce."
  },
  {
    title: "Shake Your Honeymaker Burger",
    imgUrl: "https://bit.ly/39IIlXd",
    rating: "5",
    instructions: "Something something hamburger, add honey mustard"
  }
];

class State {}

const getters: GetterTree<State, object> = {
  searchList(state): Array<string> {
    return state.recipes.map((recipe: Recipe) => recipe.title);
  }
};

const mutations: MutationTree<State> = {
  addRecipe(state, recipe) {
    state.recipes.push(recipe);
  }
};

const actions: ActionTree<State, object> = {
  addRecipe(context, recipe: Recipe) {
    context.commit("addRecipe", recipe);
  }
};

export default new Vuex.Store({
  state: { recipes },
  getters: getters,
  mutations: mutations,
  actions: actions
});
