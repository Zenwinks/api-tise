<template>
    <div id="home">
        <h1>Bonjour {{login}}, bienvenue sur Api-Tise</h1>
        <div id="buttons">
            <button type="button" class="buttonList">Liste des cocktails</button>
            <button class="buttonRandom">Cocktail aléatoire</button>
            <button class="buttonIngred">Quels cocktails avec mes ingrédients ?</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                login: 'sfondain'
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

    h1 {
        grid-row: 1/2;
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

    .buttonList {
        width: 300px;
        height: 300px;
        border-radius: 180px;
        border: 1px solid black;
        background-color: white;
        outline: none;
    }

    .buttonList:hover {
        background-color: cornflowerblue;
        color: white;
        cursor: url(http://cur.cursors-4u.net/food/foo-5/foo462.cur),default;
    }

    .buttonIngred {
        width: 300px;
        height: 300px;
        border-radius: 180px;
        border: 1px solid black;
        background-color: white;
        outline: none;
    }

    .buttonIngred:hover {
        background-color: cornflowerblue;
        color: white;
        cursor: url(http://cur.cursors-4u.net/food/foo-5/foo462.cur),default;
    }

    .buttonRandom {
        width: 300px;
        height: 300px;
        border-radius: 180px;
        border: 1px solid black;
        background-color: white;
        outline: none;
    }

    .buttonRandom:hover {
        background-color: cornflowerblue;
        color: white;
        cursor: url(http://cur.cursors-4u.net/food/foo-5/foo462.cur),default;
    }

</style>
