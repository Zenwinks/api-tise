<template>
    <div class="random-cocktail">
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
        <div class="title">
            <h1>Api-Tise</h1>
            <h2>Cocktail aléatoire</h2>

            <button @click="reload" type="button" class="buttonAccueil btn btn-info">Relancer le random</button>

            <div class="listCocktails">
                <ul>
                    <li v-for="(i,key) in infos" :key="key">
                        <p>{{i.strDrink}}</p>
                        <img :src="i.strDrinkThumb+'/preview'">
                    </li>
                </ul>
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
        methods:{
            redirectAccueil:function(){
                this.$router.push({path: "/"})
            },
            reload:function(){
                window.location.reload()
            }
        },
        created() {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                .then(response => {
                    this.infos = response.data.drinks
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

    .buttonAccueil{
        margin: 5px;
        width:  10%;
    }

    .listCocktails {
        width: 100%;
        height: 80%;
    }

    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        text-align: center  ;

        li {
            width: 15%;
            margin: 20px;
            float: left;

            img {
                width: 80%;
            }
        }
    }

</style>