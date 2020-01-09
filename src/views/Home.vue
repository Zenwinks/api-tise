<template>
  <div id="home">
    <div class="title">
      <h1>Bonjour {{login}}</h1>
      <h1>Bienvenue sur Api-Tise !</h1>
    </div>
    <button v-if="!isConnected" @click="redirectLogin()" type="button" class="buttonLogin btn btn-outline-success">Connexion</button>
    <button v-if="isConnected"  type="button" class="buttonLogin btn btn-outline-danger">Déconnexion</button>
    <div id="buttons">
      <button @click="redirectList('1')" type="button" class="button">Liste des cocktails</button>
      <button @click="redirectList('2')" type="button" class="button">Cocktail aléatoire</button>
      <button @click="redirectList('3')" type="button" class="button">Quels cocktails avec mes ingrédients ?</button>
      <button @click="redirectList('4')" type="button" class="button">Mes cocktails</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                login: '',
                isConnected: false
            }
        },
        methods:{
            redirectList:function (page){
              switch (page) {
                case '1':
                  this.$router.push({path: "/listeCocktail"})
                  break;
                case '2':
                  // this.$router.push({path: "/"})
                  break;
                case '3':
                  this.$router.push({path: "/i"})
                  break;
                case '4':
                  // this.$router.push({path: "/"})
                  break;
              }
            },
            redirectLogin:function(){
                this.$router.push({path: "/login"})
            },
            verifConnected:function(){
                if(this.login === ''){
                  this.isConnected = false
                }
                else{
                    this.isConnected = true
                }
            }
        },
        mounted:function(){
          this.verifConnected()
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
  .buttonLogin{
    position: absolute;
    right:2px;
  }

</style>
