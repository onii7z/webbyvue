<template>
  <div class="burger__connexion" id="connexion">
    <form class="burgerform burger">
      <button @click="close" class="burger__close">
        <svg
          class="burger__svg--mobile"
          width="38"
          height="38"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6666 6.33331L6.33331 31.6666M31.6666 31.6666L6.33331 6.33331L31.6666 31.6666Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          class="burger__svg--desktop"
          width="38"
          height="38"
          fill="#1DD0D7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6666 6.33331L6.33331 31.6666M31.6666 31.6666L6.33331 6.33331L31.6666 31.6666Z"
            stroke="#1DD0D7"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <p class="burger__desc">Nom d'utilisateur</p>
      <input class="burger__form" type="text" v-model="utilisateur.username" />
      <p class="burger__desc">Mot de passe</p>
      <input
        class="burger__form"
        type="password"
        v-model="utilisateur.password"
      />
      <a class="burger__link" href="#">Mot de passe oublié ? </a>
      <button
        class="burger__submit"
        type="submit"
        value="Se connecter"
        @click="connect"
      >
        {{ titre }}
      </button>
      <button class="burger__btn">S'inscrire</button>
    </form>
  </div>
</template>
<script>
import param from "@/param/param";
import appService from "@/services/appService";
export default {
  name: "Mobile",
  data() {
    return {
      utilisateur: {
        username: null,
        password: null,
        token: null,
        role: null,
      },
      titre: null,
    };
  },
  created() {
    this.titre = param.titre;
    axios({
      method: "get",
      url: param.host + "option",
    })
      .then(
        function (response) {
          this.liste = response.data;
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
  methods: {
    connect: function () {
      console.log("Connect");

      let params = new FormData();
      params.append("username", this.utilisateur.username);
      params.append("password", this.utilisateur.password);

      axios({
        method: "post",
        url: param.auth,
        data: params,
      })
        .then(
          function (response) {
            this.utilisateur = response.data;
            this.titre = this.utilisateur.user_display_name;

            let localValues = {
              nom: this.utilisateur.user_display_name,
              role: this.utilisateur.user_role[0],
              token: this.utilisateur.token,
            };
            appService.setLocal(localValues);
          }.bind(this)
        )
        .catch((error) => {
          console.log("erreur de connexion", error);
        });
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
</style>
