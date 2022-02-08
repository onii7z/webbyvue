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
    <!-- Menu Burger -->
    <div class="header__burger">
      <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#585CA6"/>
<path d="M28 24H10V22H28V24ZM28 19H10V17H28V19ZM28 14H10V12H28V14Z" fill="white"/>
</svg>
    </div>
    <!--  -->
    <!-- Nav Burger -->
    <div class="headermenu menu" :class="menuIsOpen && 'menu--open'" id="modal">
        <nav class="headermenu burg" >
            <!-- <img class="navimg" src="src/assets/img/free_logo_2022.png" alt="Logo FreeMusic"> -->
            <ul class="burglist">
                <li class="burgitem"><a class="burglink" href="#">Accueil</a></li>
                <li class="burgitem"><a class="burglink" href="#">A propos</a></li>
                <li class="burgitem"><a class="burglink" href="#">Parcours</a></li>
                <li class="burgitem"><a class="burglink" href="#">Tutos</a></li>

            </ul>
            <a href="#" class="burg__close">&times;</a>
        </nav>
    </div>
    <div class="headerform">
            <form class="headerform" action="#modal">
            <button class="headerbtn menuBurger" 
                @pointerdown="menuIsOpen = !menuIsOpen" 
                :class="menuIsOpen && 'menuBurger--open'">
                    <span class="menuBurgerbar"></span>
                    <span class="menuBurgerbar"></span></button>
            </form>
        </div>
    <!-- nav du header -->
    <nav class="header__nav nav">
      <ul class="nav__main">
        <li class="nav__menu">
          <router-link to="/" class="nav__lien nav__lien--titles"> Accueil </router-link>
        </li>
        <li class="nav__menu">
          <p class="nav__lien nav__lien--titles"> A propos </p>
          <ul class="nav__deroulant">
            <li class="nav__ligne"><router-link to="/quisommes" class="nav__lien"> Qui sommes-nous ? </router-link></li>
            <li class="nav__ligne"><router-link to="/contact" class="nav__lien"> Nous contacter </router-link></li>
          </ul>
        </li>
        <li class="nav__menu">
          <router-link to="/presentation_parcours" class="nav__lien nav__lien--titles"> Parcours </router-link>
          <ul class="nav__deroulant">
            <li class="nav__ligne"><router-link to="/liste_parcours" class="nav__lien"> Liste des parcours </router-link></li> 
            <li class="nav__ligne"><router-link to="/lexique_sommaire" class="nav__lien"> Lexique </router-link></li> 
          </ul>
        </li>
        <li class="nav__menu">
          <router-link to="/tuto" class="nav__lien nav__lien--titles"> Tutos </router-link>
          <ul class="nav__deroulant">
            <li class="nav__ligne nav__ligne--titre">Front</li>
            <ul class="nav__ssderoulant">
              <li class="nav__ligne"><router-link to="/tuto_html" class="nav__lien"> HTML </router-link></li>
              <li class="nav__ligne"><router-link to="/tuto_css" class="nav__lien"> CSS </router-link></li>
              <li class="nav__ligne"><router-link to="/tuto_figma" class="nav__lien"> Figma </router-link></li>
              <li class="nav__ligne"><router-link to="/tuto_javascript" class="nav__lien"> JavaScript </router-link></li>
            </ul>
            <li class="nav__ligne nav__ligne--titre">Back</li>
            <ul class="nav__ssderoulant">
              <li class="nav__ligne"><router-link to="/tuto_cms" class="nav__lien"> CMS </router-link></li>
              <li class="nav__ligne"><router-link to="/tuto_php" class="nav__lien"> PHP </router-link></li>
              <li class="nav__ligne"><router-link to="/tuto_sql" class="nav__lien"> MySQL </router-link></li>
            </ul>
          </ul>
        </li>
      </ul>
    </nav>
    <router-link to="/search" class="header__btn header__btn--search">
      <button  type="search" class="header__button header__button--search"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.0005 9.30313C25.0005 4.16406 21.0549 0 16.1902 0C11.3211 0 7.37695 4.16406 7.37695 9.30313C7.37695 14.4391 11.3225 18.6031 16.1902 18.6031C21.0549 18.6031 25.0005 14.4391 25.0005 9.30313ZM8.72695 9.40469C8.72811 8.36138 8.92276 7.32855 9.29978 6.36521C9.6768 5.40187 10.2288 4.52692 10.9242 3.79035C11.6196 3.05378 12.4449 2.47004 13.3527 2.0725C14.2606 1.67495 15.2333 1.47138 16.2152 1.47344C17.1967 1.47179 18.169 1.67569 19.0763 2.07346C19.9837 2.47123 20.8083 3.05508 21.5032 3.79164C22.1981 4.52821 22.7496 5.40305 23.1261 6.36617C23.5026 7.32928 23.6968 8.36179 23.6975 9.40469C23.6966 10.4474 23.5022 11.4798 23.1256 12.4427C22.749 13.4057 22.1976 14.2803 21.5027 15.0167C20.8078 15.7531 19.9832 16.3368 19.076 16.7345C18.1687 17.1322 17.1966 17.336 16.2152 17.3344C12.0784 17.3344 8.72695 13.7844 8.72695 9.40469Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.15011 24.9438L1.4707 22.097L7.40747 15.7876C7.40747 15.7876 7.54864 16.9829 8.26041 17.736C8.96923 18.4923 10.0869 18.636 10.0869 18.636L4.15011 24.9438Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1741 7.92666C21.1741 8.82041 21.8211 8.48291 21.8211 7.24072C21.8211 5.1001 20.1902 3.36572 18.1755 3.36572C17.0035 3.36572 16.6873 4.05166 17.5299 4.05166C18.0087 4.05187 18.4827 4.15226 18.9249 4.34711C19.3672 4.54195 19.769 4.82744 20.1073 5.18727C20.4457 5.5471 20.7141 5.97422 20.8971 6.44424C21.0802 6.91427 21.1743 7.41799 21.1741 7.92666Z" fill="white"/>
</svg></button>
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


