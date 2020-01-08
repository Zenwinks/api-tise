<template>
    <div id="searchcocktailbyingredient">
        <div class="title">
            <h1>Api-Tise</h1>
            <h2>Recherche de cocktails par ingredient</h2>

            <div class="center">
                <table width="400" align="center">
                    <tbody><tr>
                        <td>
                            <form class="navbar-form" action="../browse.php" autocomplete="off">
                                <div class="input-group">
                                    <input type="text" name="s" class="form-control" autocomplete="off" placeholder="Search for a Cocktail...">
                                    <div class="input-group-btn">
                                        <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
                                    </div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    </tbody></table>

                <img src="images/icons/cocktail-logo.png"> <b>Total Drinks: </b> 592<img src="images/transparent.png" width="10" height="1"><img src="images/icons/ingredient-logo.png"> <b>Total Ingredients: </b>475<img src="images/transparent.png" width="10" height="1"><img src="images/icons/image2.png"> <b>Drink Images: </b>592		<br>
            </div>

            <div id="listCocktails">
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
        name: "SearchCocktailByIngredient",
        data() {
            return {
                ingredient: "Gin",
                infos: [],
                searchString: "",
                // The data model. These items would normally be requested via AJAX,
                // but are hardcoded here for simplicity.
                articles: [
                    {
                        "title": "What You Need To Know About CSS Variables",
                        "url": "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
                        "image": "https://tutorialzine.com/media/2016/03/css-variables.jpg"
                    },
                    {
                        "title": "Freebie: 4 Great Looking Pricing Tables",
                        "url": "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
                        "image": "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
                    }
                ]
            }
        },
        created() {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`+this.ingredient)
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