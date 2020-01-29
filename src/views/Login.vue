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
            <button type="button" @click="socialConnection('facebook')" class="btn btn-success btn-lg">Facebook</button>
            <button type="button" @click="socialConnection('google')" class="btn btn-success btn-lg">Google</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

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
      login() {
        this.$auth.loginWithRedirect();
      },
      socialConnection: function (socialMedia) {
        // eslint-disable-next-line no-console
        console.log(socialMedia)
        axios
          .get('https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=104565000066-q7q63bouq2ct8gj73drmpu186amn6a3f.apps.googleusercontent.com&as=AE8zUQlCAtcGjZcKCRj7Fw&destination=https%3A%2F%2Flogin.eu.auth0.com&approval_state=!ChRFd0Jnczl2N2ZtWEdxcXpNUFY1UBIfQTVPVU9JRWd3bmdiUUhVU2RlLXNqMHc3VEo4Tl94WQ%E2%88%99AJDr988AAAAAXjKwNRYBosEhY6hXjkE5RUiRxC1HlFWd&oauthgdpr=1&xsrfsig=ChkAeAh8T5OlrmwG2B0GAcXLvbAHC4iY7BOHEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow')
          .then(response => {
            // eslint-disable-next-line no-console
            console.log(response)
          })
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
