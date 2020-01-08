<template>
  <div class="login">
    <div class="username">
      <label for="username">Login :</label>
      <input id="username" type="text">
    </div>
    <div class="password">
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

<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>