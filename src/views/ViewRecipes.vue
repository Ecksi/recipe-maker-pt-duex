<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(["recipes"])
  }
})
export default class ViewRecipes extends Vue {}
</script>

<template>
  <div>
    View all REcipes
    <ul v-for="(recipe, index) in recipes" :key="index">
      <li>{{ recipe.title }}</li>
      <li>{{ recipe.rating }}</li>
    </ul>
  </div>
</template>
