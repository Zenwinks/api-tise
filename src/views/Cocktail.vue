<template>
  <div>
    <button @click="retour" type="button" class="buttonRetour btn btn-secondary">Retour</button>
    <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
    <div class="page">
      <h1>{{infoCocktail.strDrink}}</h1>
      <div class="img">
        <img :src="infoCocktail.strDrinkThumb" class="id-img">
      </div>
      <div class="infos">
        <h2>Ingrédients : </h2>
        <ul>
          <li v-for="(i,key) in ingredient" :key="key">
            <p>{{i}}</p>
            <img :src="'https://www.thecocktaildb.com/images/ingredients/'+i+'-small.png'">
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Cocktail.vue",
    data() {
      return {
        infoCocktail: [],
        id: this.$route.params.id,
        ingredient: []
      }
    },
    created() {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + this.id)
        .then(response => {
          this.infoCocktail = response.data.drinks[0]
          this.getIngredients()
        })
        .catch(e => {
          this.errors.push(e)
        })

    },
    methods: {
      getIngredients() {
        for (let i = 1; i < 15; i++) {
          if (this.infoCocktail["strIngredient" + i]) {
            this.ingredient.push(this.infoCocktail["strIngredient" + i])
          }
        }
      },
      retour: function () {
        history.go(-1)
      },
      redirectAccueil: function () {
        this.$router.push({path: "/"})
      },
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
    margin-top: 15px;
  }

  .page {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    align-items: center;
  }

  .img {
    width: 20%;
    height: 20%;
    margin-top: 20px;
  }

  .id-img {
    max-width: 100%;
    max-height: 100%;
  }

  .buttonAccueil, .buttonRetour {
    margin: 5px;
    width: 10%;
  }

  h2 {
    margin-top: 20px;
    text-align: center;
    font-size: 26px;
  }

  .infos {
    width: 100%;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
  }

  li {
    list-style-type: none;

    p {
      text-align: center;
      font-style: italic;
    }
  }
</style>
