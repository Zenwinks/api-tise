import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListeCocktail from "../views/ListeCocktail";
import SearchCocktailByIngredient from "../views/SearchCocktailByIngredient";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/listeCocktail',
    name: 'ListeCocktail',
    component: ListeCocktail
  },
  {
    path: '/rechercheCocktail',
    name: 'SearchCocktailByIngredient',
    component: SearchCocktailByIngredient
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
