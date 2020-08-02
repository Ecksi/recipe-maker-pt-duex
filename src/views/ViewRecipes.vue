<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapState } from "vuex";
import { Recipe } from "../store/types";

@Component({
  computed: {
    ...mapState({
      recipes: "recipes"
    })
  },
  methods: {
    ...mapGetters({
      sortBy: "sortBy",
      sortByBurgers: "sortByBurgers"
    })
  }
})
export default class ViewRecipes extends Vue {
  public sortByBurgers!: Array<Recipe> = this.sortByBurgers;
  currentRecipes: Array<Recipe> = [];

  burgers(): void {
    console.log('ahh', this.sortByBurgers())
    this.currentRecipes = this.sortByBurgers();
  }
  
  created() {
    this.currentRecipes = this.recipes;
  }
}
</script>

<template>
  <div>
    View all REcipes
    <button @click="burgers()">Sort by burgers</button>
    <ul v-for="(recipe, index) in currentRecipes" :key="index">
      <li>{{ recipe.title }}</li>
      <li>{{ recipe.rating }}</li>
    </ul>
  </div>
</template>
