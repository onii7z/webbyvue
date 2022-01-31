<template>
  <header class="header grid">
    <!-- Place du logo -->
    <router-link to="/" class="header__logo">
      <img 
        src="../assets/webbie_logo_3.gif"
        alt="Webby"
      />
    </router-link>
    <!-- titre -->
    <h1 class="header__titre">{{ liste.title }} {{ liste.description }}</h1>
    <!-- inscription/connexion -->
    <div class="header__btn">
      <router-link to="/">
        <button  type="submit" class="header__button">Connexion</button>
      </router-link>
      <router-link to="/" >
        <button  type="submit" class="header__button">Inscription</button>
      </router-link>
    </div>
    <!-- nav du header -->
    <nav class="header__nav nav">
      <ul class="nav__main">
        <li class="nav__menu">
          <router-link to="/" class="nav__lien"> Acceuil </router-link>
        </li>
        <li class="nav__menu">
          <router-link to="/quisommes" class="nav__lien"> A propos </router-link>
          <ul class="nav__deroulant">
            <li class="nav__ligne"><router-link to="/quisommes" class="nav__lien"> Qui sommes-nous ? </router-link></li>
            <li class="nav__ligne"><router-link to="/" class="nav__lien"> Présentation GEN </router-link></li>
            <li class="nav__ligne"><router-link to="/" class="nav__lien"> Nous contacter </router-link></li>
          </ul>
        </li>
        <li class="nav__menu">
          <router-link to="/" class="nav__lien"> Parcours Initiatique </router-link>
          <ul class="nav__deroulant">
            <li class="nav__ligne"><router-link to="/" class="nav__lien"> Présentation </router-link></li> 
            <li class="nav__ligne"><router-link to="/" class="nav__lien"> Liste des parcours </router-link></li> 
            <li class="nav__ligne"><router-link to="/" class="nav__lien"> Lexique </router-link></li> 
          </ul>
        </li>
        <li class="nav__menu">
          <router-link to="/tuto" class="nav__lien"> Tutos </router-link>
          <ul class="nav__deroulant">
            <p class="nav__ligne">Front</p>
            <ul class="nav__deroulant">
              <li class="nav__ligne"><router-link to="/" class="nav__lien"> HTML </router-link></li>
              <li class="nav__ligne"><router-link to="/" class="nav__lien"> CSS </router-link></li>
              <li class="nav__ligne"><router-link to="/" class="nav__lien"> Figma </router-link></li>
              <li class="nav__ligne"><router-link to="/" class="nav__lien"> Adobe XD </router-link></li>
            </ul>
            <p class="nav__ligne">Back</p>
            <ul class="nav__deroulant">
              <li class="nav__ligne"><router-link to="/" class="nav__lien"> CMS </router-link></li>
              <li class="nav__ligne"><router-link to="/" class="nav__lien"> PHP </router-link></li>
              <li class="nav__ligne"><router-link to="/" class="nav__lien"> MySQL </router-link></li>
            </ul>
          </ul>
        </li>
      </ul>
    </nav>
    <router-link to="/tuto" class="header__btn header__btn--search">
      <button  type="search" class="header__button header__button--search">search</button>
    </router-link>
  </header>
</template>

<script>
import param from "@/param/param";

export default {
  name: "Header",
  data() {
    return {
      liste: [],
    };
  },
  created() {
    axios({
      method: "post",
      url: param.auth,
      data: {
        username: param.user,
        password: param.psw,
      },
    })
      .then(
        function (response) {
          // console.log("Reponse token", response);
          let token = response.data.token;
          // console.log("Token", token)
          let headers = { Authorization: "Bearer " + token };
          axios({
            method: "get",
            url: param.host + "settings",
            headers: headers,
          }).then(
            function (response) {
              // console.log('test', response);
              this.liste = response.data;
              // console.log('liste', this.liste);
            }.bind(this)
          );
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
</style>


