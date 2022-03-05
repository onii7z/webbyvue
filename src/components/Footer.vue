<template>
  <footer class="footer grid">
    <h2 class="footer__titre" v-for="option in liste" :key="option.id">
      {{ option.acf.titre_du_site }} {{ option.acf.slogan_du_site }}
    </h2>
    <nav class="footer__nav navi">
      <ul class="navi__main">
        <li class="navi__menu">
          <router-link to="/" class="navi__lien"> Accueil </router-link>
        </li>
        <li class="navi__menu">
          <router-link to="/quisommes" class="navi__lien">
            A propos
          </router-link>
        </li>
        <li class="navi__menu">
          <router-link to="/presentation_parcours" class="navi__lien">
            Parcours</router-link
          >
        </li>
        <li class="navi__menu">
          <router-link to="/tuto" class="navi__lien"> Tutos </router-link>
        </li>
      </ul>
    </nav>
    <div class="footer__link">
      <router-link to="/mentions" class="footer__lien">
        Mentions légales
      </router-link>
      <br />
      <router-link to="/politique" class="footer__lien">
        Politique de confidentialité
      </router-link>
      <br />
      <router-link to="/utilisation" class="footer__lien">
        Conditions d'utilisation
      </router-link>
    </div>
  </footer>
</template>

<script>
import param from "@/param/param";

export default {
  name: "Footer",
  data() {
    return {
      liste: [],
    };
  },
  created() {
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
};
</script>

<style scoped>
</style>
  

