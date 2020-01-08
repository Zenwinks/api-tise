<template>
  <div id="home">
    <div class="title">
      <h1>Bonjour {{login}}</h1>
      <h1>Bienvenue sur Api-Tise !</h1>
    </div>
    <div id="buttons">
      <button  type="button" class="button">Liste des cocktails</button>
      <button type="button" class="button">Cocktail aléatoire</button>
      <button type="button" class="button">Quels cocktails avec mes ingrédients ?</button>
      <button type="button" class="button">Mes cocktails</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                login: 'Mère de Pierre en Y (Et merceee)'
            }
        }
    }
</script>

<style lang="scss" scoped>
  #home {
    height: 100%;
    display: grid;
    grid-template-columns: 15% 35% 35% 15%;
    grid-template-rows: 15% 35% 35% 15%;
    background-color: aliceblue;
  }

  .title {
    margin-top: 30px;
    grid-row: 1/2;
    grid-column: 2/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    grid-row: 0/2;
    grid-column: 2/4;
    margin: auto;
  }

  #buttons {
    width: 100%;
    grid-row: 2/4;
    grid-column: 1/5;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .button {
    width: 300px;
    height: 300px;
    border-radius: 180px;
    border: 1px solid black;
    background-color: white;
    outline: none;
  }

  .button:hover {
    background-color: cornflowerblue;
    color: white;
    cursor: url(http://cur.cursors-4u.net/food/foo-5/foo462.cur), default;
  }

</style>
