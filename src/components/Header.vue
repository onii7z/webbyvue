<template>
  <header class="header grid">
    <!-- Place du logo -->
    <router-link to="/">
      <img
        class="header__logo"
        src="../assets/webbie_logo_3.gif"
        alt="Webby"
      />
    </router-link>
    <!-- titre -->
    <h1 class="header__titre">{{ liste.title }} {{ liste.description }}</h1>
    <!-- inscription/connexion -->
    <router-link to="/">
      <button class="header__button" type="submit">Connexion</button>
    </router-link>
    <router-link to="/">
      <button class="header__button" type="submit">Inscription</button>
    </router-link>
    <!-- nav du header -->
    <nav class="header__nav nav">
      <ul class="nav__main">
        <li class="nav__menu">
          <router-link to="/"> Acceuil </router-link>
        </li>
        <li class="nav__menu">
          <router-link to="/quisommes"> A propos </router-link>
          <ul class="nav__deroulant">
            <li class="nav__ligne"><router-link to="/quisommes"> Qui sommes-nous ? </router-link></li>
            <li class="nav__ligne"><router-link to="/"> Présentation GEN </router-link></li>
            <li class="nav__ligne"><router-link to="/"> Nous contacter </router-link></li>
          </ul>
        </li>
        <li class="nav__menu">
          <router-link to="/"> Parcours Initiatique </router-link>
          <ul class="nav__deroulant">
            <li class="nav__ligne"><router-link to="/"> Présentation </router-link></li> 
            <li class="nav__ligne"><router-link to="/"> Liste des parcours </router-link></li> 
            <li class="nav__ligne"><router-link to="/"> Lexique </router-link></li> 
          </ul>
        </li>
        <li class="nav__menu">
          <router-link to="/tuto"> Tutos </router-link>
          <ul class="nav__deroulant">
            <p class="nav__ligne">Front</p>
            <ul class="nav__deroulant">
              <li class="nav__ligne"><router-link to="/"> HTML </router-link></li>
              <li class="nav__ligne"><router-link to="/"> CSS </router-link></li>
              <li class="nav__ligne"><router-link to="/"> Figma </router-link></li>
              <li class="nav__ligne"><router-link to="/"> Adobe XD </router-link></li>
            </ul>
            <p class="nav__ligne">Back</p>
            <ul class="nav__deroulant">
              <li class="nav__ligne"><router-link to="/"> CMS </router-link></li>
              <li class="nav__ligne"><router-link to="/"> PHP </router-link></li>
              <li class="nav__ligne"><router-link to="/"> MySQL </router-link></li>
            </ul>
          </ul>
        </li>
      </ul>
    </nav>
    <router-link to="/tuto">
      <button class="header__search" type="search">search</button>
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


