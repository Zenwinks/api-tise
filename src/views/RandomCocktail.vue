<template>
  <div class="random-cocktail">
    <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
    <div class="title">
      <h1>Api-Tise</h1>
      <h2>Cocktail aléatoire</h2>

      <button @click="reload" type="button" class="btn btn-info">Relancer le random</button>

      <div class="listCocktails">
        <div @click="redirectCocktail(infos.idDrink)" class="cocktail">
          <p>{{infos.strDrink}}</p>
          <img :src="infos.strDrinkThumb+'/preview'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "RandomCocktail",
        data() {
            return {
                infos: []
            }
        },
        methods: {
            redirectAccueil: function () {
                this.$router.push({path: "/"})
            },
            reload: function () {
                window.location.reload()
            },
            redirectCocktail: function (id) {
                this.$router.push({name: 'cocktail', params: {id: id}})
            }
        },
        created() {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                .then(response => {
                    this.infos = response.data.drinks[0]
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
    }
</script>

<style scoped lang="scss">

  .title {
    margin-top: 30px;
    grid-row: 1/2;
    grid-column: 2/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .random-cocktail {
    width: 100%;
    height: 100%;
  }

  .buttonAccueil {
    margin: 5px;
    width: 10%;
  }

  .listCocktails {
    width: 100%;
    height: 80%;
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }

  .cocktail{
    border: 1px solid black;
    padding: 20px;
  }

  .cocktail:hover{
    cursor: pointer;
    color: orange;
    font-weight: bold;
  }

</style>
