import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListeCocktail from "../views/ListeCocktail";
import SearchIngredientCocktail from "../views/SearchIngredientCocktail";

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
    path: '/i',
    name: 'SearchIngredientCocktail',
    component: SearchIngredientCocktail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
