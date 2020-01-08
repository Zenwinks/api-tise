<template>
  <div id="ListeCocktail">
    <div class="title">
      <h1>Api-Tise</h1>
      <h2>Liste des cocktails</h2>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ListeCocktail"
    }
</script>

<style scoped>

  .title {
    margin-top: 30px;
    grid-row: 1/2;
    grid-column: 2/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>
