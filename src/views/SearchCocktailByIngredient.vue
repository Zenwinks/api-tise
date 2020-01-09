<template>
    <div id="searchcocktailbyingredient">
        <div class="title">
            <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
            <h1>Api-Tise</h1>
            <h2>Recherche de cocktails par ingredient</h2>

            <div class="search-wrapper">
                <input @keyup.enter="recherche" type="text" v-model="ingredient" name="ingredient" class="inputSearch" placeholder="Rechercher un cocktail..">
                    <label class="label-search-wrapper">Saississer un ingrédient:</label>
                <button @click="recherche" type="submit" class="btn btn-default"><span class="search-wrapper">Valider</span></button>
            </div>

            <div id="listCocktails">
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
        name: "SearchCocktailByIngredient",
        data() {
            return {
                ingredient: '',
                infos: []
            }
        },
        methods:{
            redirectAccueil:function(){
                this.$router.push({path: "/"})
            },
            recherche:function(){
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`+this.ingredient)
                    .then(response => {
                        this.infos = response.data.drinks
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        },
        // created() {
        //     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`+this.ingredient)
        //         .then(response => {
        //             this.infos = response.data.drinks
        //         })
        //         .catch(e => {
        //             this.errors.push(e)
        //         })
        // }
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

    .search-wrapper {
        position: relative;
    }
    .search-wrapper label {
        position: absolute;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        top: 8px;
        left: 12px;
        z-index: -1;
        transition: 0.15s all ease-in-out;
    }
    .search-wrapper input {
        padding: 4px 12px;
        color: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(0, 0, 0, 0.12);
        transition: 0.15s all ease-in-out;
        background: white;
    }
    .search-wrapper input:focus {
        outline: none;
        transform: scale(1.05);
    }
    .search-wrapper input:focus + label {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
    }
    .search-wrapper input::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
    }

</style>