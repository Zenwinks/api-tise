import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListeCocktail from "../views/ListeCocktail";
import SearchCocktailByIngredient from "../views/SearchCocktailByIngredient";
import RandomCocktail from "../views/RandomCocktail";
import Cocktail from "../views/Cocktail";
import Register from "../views/Register";
import auth from "../auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: auth.requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/listeCocktail',
    name: 'ListeCocktail',
    component: ListeCocktail,
    beforeEnter: auth.requireAuth
  },
  {
    path: '/rechercheCocktail',
    name: 'SearchCocktailByIngredient',
    component: SearchCocktailByIngredient,
    beforeEnter: auth.requireAuth
  },
  {
    path: '/randomCocktail',
    name: 'RandomCocktail',
    component: RandomCocktail,
    beforeEnter: auth.requireAuth
  },
  {
    path: '/cocktail/:id',
    name: 'cocktail',
    component: Cocktail,
    beforeEnter: auth.requireAuth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
