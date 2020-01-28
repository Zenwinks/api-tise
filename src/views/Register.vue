<template>
  <div class="login-wrapper">
    <div class="login-inner-wrapper">
      <div class="title">
        <h1>Connexion</h1>
      </div>
      <div class="login">
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="pwd">Password</label>
          <input type="password" class="form-control" id="pwd">
        </div>
        <div class="error" v-if="error">Le nom d'utilisateur ou le mot de passe est incorrect</div>
        <button type="button" class="btn btn-success btn-lg">S'enregistrer</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        email: '',
        password: '',
        error: false
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .login-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .login-inner-wrapper {
      width: 25%;
      height: 50%;
      box-shadow: 0 0 11px black;

      .login {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .error {
          font-size: 12px;
          margin-bottom: 20px;
          color: red;
          font-weight: bold;
        }

        .button {
          background-color: limegreen;
          color: white;
          width: 70%;
          height: 50px;
          cursor: pointer;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
      }

      .title {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: cornflowerblue;
        color: white;

        h1 {
          font-size: 22px;
          margin: 0;
        }
      }
    }
  }
</style>
