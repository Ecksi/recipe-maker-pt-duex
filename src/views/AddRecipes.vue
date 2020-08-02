<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

@Component({
  methods: {
    ...mapActions({
      addRecipe: "addRecipe"
    }),
  }
})
export default class AddRecipes extends Vue {
  title = "";
  imgUrl = "";
  rating = 1;
  instructions = "";
  addRecipe!: () => any;

  onSubmit() {
    const recipe = {
      title: this.title,
      imgUrl: this.imgUrl,
      rating: this.rating,
      instructions: this.instructions
    };
    this.addRecipe(recipe);
  }
}
</script>

<template>
  <div>
    <h1>Add recipes here</h1>
    <form id="rating-form" @submit.prevent="onSubmit">
      <label for="recipe-name">
        <span>Title:</span>
        <input
          id="recipe-name"
          type="text"
          placeholder="Recipe Name"
          v-model="title"
        />
      </label>
      <label for="recipe-img">
        <span>Image:</span>
        <input
          id="recipe-img"
          type="text"
          placeholder="Add img url"
          v-model="imgUrl"
        />
      </label>
      <label for="recipe-rating">
        select rating
      </label>
      <select name="recipe-rating" v-model="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <label for="recipe-instructions">
        <span class="textarea-label">Instructions:</span>
        <textarea
          id="recipe-instructions"
          rows="10"
          placeholder="Add directions to create your recipe here"
          v-model="instructions"
        ></textarea>
      </label>
      <button>Add Recipe</button>
    </form>
  </div>
</template>
