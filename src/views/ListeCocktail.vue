<template>
  <div id="ListeCocktail">
    <div class="title">
      <h1>Api-Tise</h1>
      <h2>Liste des cocktails</h2>
      <div id="listCocktail">
        <ul>
          <li v-for="(i,key) in infos" :key="key">
            <p>{{i.strDrink}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ListeCocktail",
        data() {
            return {
                letter: "a",
                infos: []
            }
        },
        created() {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`+this.letter)
                .then(response => {
                    this.infos = response.data.drinks
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
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
