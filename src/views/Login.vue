<template>
  <div class="login-wrapper">
    <div class="login-inner-wrapper">
      <div class="title">
        <h1>Connexion</h1>
      </div>
      <div class="login">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" v-model="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="pwd">Mot de passe</label>
          <input type="password" v-model="password" class="form-control" id="pwd">
        </div>
        <div class="error" v-if="error">Le nom d'utilisateur ou le mot de passe est incorrect</div>
        <div class="actionButtons">
          <div>
            <button type="button" @click="login()" class="btn btn-success btn-lg">Se connecter</button>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from "../auth";

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        error: false
      }
    },
    methods: {
      login: function () {
        auth.login(this.email, this.password)
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

        .actionButtons {
          display: flex;
          flex-direction: column;

          div {
            margin-top: 10px;

            button:last-child {
              margin-left: 10px;
            }
          }
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
