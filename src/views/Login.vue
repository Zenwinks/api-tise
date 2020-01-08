<template>
  <div :class="$style.login">
    <div :class="$style.username">
      <label for="username">Login :</label>
      <input id="username" type="text">
    </div>
    <div :class="$style.password">
      <label for="password">Mot de passe :</label>
      <input id="password" type="password">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style module scoped>
  .login {
    width: 100%;
    height: 100%;
  }
</style>