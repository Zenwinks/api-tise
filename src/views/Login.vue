<template>
  <div class="login-wrapper">
    <div class="title">
      <h1>Connexion</h1>
    </div>
    <div class="login">
      <div class="username">
        <div class="label">Login :</div>
        <div class="input">
          <input id="username" v-model="login" type="text">
        </div>
      </div>
      <div class="password">
        <div class="label">Mot de passe :</div>
        <div class="input">
          <input id="password" v-model="pwd" type="password">
        </div>
      </div>
      <div class="error" v-if="error">Le nom d'utilisateur ou le mot de passe est incorrect</div>
      <div class="button">
        <div>Se connecter</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        login: '',
        pwd: '',
        error: false
      }
    }
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

    .login {
      width: 25%;
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid blue;
      border-radius: 0 0 10px 10px;
      font-size: 18px;

      .username, .password {
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: 40% 60%;
        width: 100%;
        text-align: center;

        .label {
          grid-column: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-right: 10px;
        }

        .input {
          height: 30px;
          width: 95%;
          grid-column: 2;
          display: flex;
          align-items: center;
          justify-content: center;

          input {
            height: 100%;
            width: 100%;
          }
        }
      }

      .username {
        margin-bottom: 15px;
      }

      .error {
        font-size: 12px;
        margin-bottom: 20px;
        color: red;
        font-weight: bold;
      }

      .button {
        background-color: mediumspringgreen;
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
      width: 25%;
      text-align: center;
      background-color: blue;
      color: white;
      border: 1px solid blue;
      border-radius: 10px 10px 0 0;

      h1 {
        font-size: 22px;
      }
    }
  }
</style>