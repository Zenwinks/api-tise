<template>
  <div class="liste-cocktail-wrapper">
    <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
    <div class="title">
      <h1>Api-Tise</h1>
      <h2>Liste des cocktails</h2>
    </div>

    <div class="list-cocktail">
      <div class="input">
        <input type="text" v-model="search" name="search" class="inputSearch" placeholder="Rechercher un cocktail..">
      </div>
      <ul v-if="search === ''">
        <li @click="redirectCocktail(i.idDrink)" v-for="(i,key) in sortedArrayBase" :key="key">
          <p>{{i.strDrink}}</p>
          <img :src="i.strDrinkThumb+'/preview'">
        </li>
      </ul>

      <ul v-if="search !== ''">
        <li @click="redirectCocktail(i.idDrink)" v-for="(i,key) in sortedArrayLetter" :key="key">
          <p>{{i.strDrink}}</p>
          <img :src="i.strDrinkThumb+'/preview'">
        </li>
      </ul>

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
        infos: [],
        search: '',
        infosByLetters: [],
        errors: ''
      }
    },
    watch: {
      search: function () {
        this.getInfosByLetters()
      }
    },
    created() {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=` + this.letter)
        .then(response => {
          this.infos = response.data.drinks
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      redirectAccueil: function () {
        this.$router.push({path: "/"})
      },
      getInfosByLetters() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + this.search)
          .then(response => {
            this.infosByLetters = response.data.drinks
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      redirectCocktail: function (id) {
        this.$router.push({name: 'cocktail', params: {id: id}})
      }
    },
    computed: {
      sortedArrayBase: function () {
        function compare(a, b) {
          if (a.strDrink < b.strDrink)
            return -1;
          if (a.strDrink > b.strDrink)
            return 1;
          return 0;
        }

        return this.infos.slice().sort(compare);
      },
      sortedArrayLetter: function () {
        function compare(a, b) {
          if (a.strDrink < b.strDrink)
            return -1;
          if (a.strDrink > b.strDrink)
            return 1;
          return 0;
        }

        if (this.infosByLetters) {
          return this.infosByLetters.slice().sort(compare);
        } else {
          return null;
        }
      }


    }

  }
</script>

<style scoped lang="scss">

  .liste-cocktail-wrapper {
    width: 100%;
    height: 100%;
  }

  .title {
    width: 100%;
    height: 20%;
    grid-row: 1/2;
    grid-column: 2/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input {
    text-align: center;
  }

  .inputSearch {

    border: none;
    width: 50%;
    line-height: 19px;
    padding: 11px 0;
    border-radius: 2px;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    text-align: center;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
  }

  .list-cocktail {
    width: 100%;
    height: 80%;
  }

  .buttonAccueil {
    margin: 5px;
    width: 10%;
  }

  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;

    li {
      width: 15%;
      max-height: 40%;
      margin: 20px;
      float: left;
      box-shadow: 0 0 11px;
      padding: 20px;

      img {
        width: 80%;
        margin-bottom: 20px;
      }
    }

    li:hover {
      cursor: pointer;
      color: orange;
      font-weight: bold;
    }
  }

</style>
