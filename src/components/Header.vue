<template>
  <header class="header grid">
    <!-- Place du logo -->
    <router-link to="/" class="header__logo">
      <img src="../assets/logov2.gif" alt="Webby" />
    </router-link>
    <!-- titre -->
    <h1 class="header__titre" v-for="option in liste" :key="option.id">
      {{ option.acf.titre_du_site }} {{ option.acf.slogan_du_site }}
    </h1>
    <!-- inscription/connexion -->
    <div class="header__btn">
      <button @click="showMobile" type="submit" class="header__button">
        {{ titre }}
      </button>
      <Mobile v-show="isMobilevisible" @close="closeMobile" />

      <a href="https://webby.houlle.org/wp-login.php?action=register">
        <button type="submit" class="header__button">Inscription</button>
      </a>
    </div>
    <!-- Menu Burger -->
    <!-- Nav Burger -->

    <div class="headerform">
      <button @click="showModal" class="headerbtn menuBurger">
        <svg
          width="38"
          height="37"
          viewBox="0 0 38 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#585CA6" />
          <path
            d="M28 24H10V22H28V24ZM28 19H10V17H28V19ZM28 14H10V12H28V14Z"
            fill="white"
          />
        </svg>
      </button>
      <Modal v-show="isModalvisible" @close="closeModal" />
    </div>

    <!-- nav du header -->
    <nav class="header__nav nav">
      <ul class="nav__main">
        <li class="nav__menu">
          <router-link to="/" class="nav__lien nav__lien--titles">
            Accueil
          </router-link>
        </li>
        <li class="nav__menu">
          <router-link to="/tuto" class="nav__lien nav__lien--titles">
            Tutos
          </router-link>
        </li>
        <li class="nav__menu">
          <router-link
            to="/presentation_parcours"
            class="nav__lien nav__lien--titles"
          >
            Parcours
          </router-link>
          <ul class="nav__deroulant">
            <li class="nav__ligne">
              <router-link to="/liste_parcours" class="nav__lien">
                Liste des parcours
              </router-link>
            </li>
            <li class="nav__ligne">
              <router-link to="/lexique_sommaire" class="nav__lien">
                Lexique
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav__menu">
          <p class="nav__lien nav__lien--titles">A propos</p>
          <ul class="nav__deroulant">
            <li class="nav__ligne">
              <router-link to="/quisommes" class="nav__lien">
                Qui sommes-nous ?
              </router-link>
            </li>
            <li class="nav__ligne">
              <router-link to="/contact" class="nav__lien">
                Nous contacter
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import param from "@/param/param";
import appService from "@/services/appService";
import Mobile from "@/components/modules/modal/mobile";
import Modal from "@/components/modules/modal/modal";

export default {
  name: "Header",
  components: { Mobile, Modal },
  data() {
    return {
      liste: [],
      utilisateur: {
        username: null,
        password: null,
        token: null,
        role: null,
      },
      titre: null,
      isMobilevisible: false,
      isModalvisible: false,
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
    showMobile() {
      this.isMobilevisible = true;
    },
    closeMobile() {
      this.isMobilevisible = false;
    },
    showModal() {
      this.isModalvisible = true;
    },
    closeModal() {
      this.isModalvisible = false;
    },
  },
};
</script>

<style scoped>
</style>


