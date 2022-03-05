<template>
  <div class="home">
    <!-- slider -->
    <img class="home__img" src="../assets/imgs/Slider.jpg" alt="#" />
    <!-- fin du slider -->

    <!-- liste des tutos -->
    <div class="grid --accueil">
      <div class="home__bandeau">
        <div class="home__carte">
          <div class="home__head">
            <svg
              class="home__svg"
              width="37"
              height="34"
              viewBox="0 0 37 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7812 13.3516H22.8266L18.5 0.708527L14.1734 13.3516H0.21875L11.4922 21.1539L7.22656 33.7401L18.5 25.9378L29.7734 33.7401L25.4469 21.097L36.7812 13.3516Z"
                fill="#FFCE31"
              />
            </svg>
            <h3 class="home__subtitle">Tutos du Mois</h3>
          </div>
          <div class="cards">
            <h3 class="cards__titre">{{ listeOrderByNote[0].titre }}</h3>
            <img class="cards__img" :src="listeOrderByNote[0].image" alt="" />
            <h5 class="cards__desc">Note : {{ listeOrderByNote[0].note }}/5</h5>
            <router-link
              class="cards__lien"
              :to="{
                name: 'Module_Tuto',
                params: { id: listeOrderByNote[0].id },
              }"
            >
              <p class="cards__sstitre">Voir le tuto</p>
            </router-link>
          </div>
        </div>

        <svg
          class="home__dash"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#1DD0D7"
          stroke-width="2"
          stoke-height="10"
        >
          <line stroke-dasharray="5, 10" x1="10" y1="30" x2="1000" y2="30" />
        </svg>

        <div class="home__carte">
          <div class="home__head">
            <svg
              class="home__svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 3.25C10.5398 3.25 3.25 10.5397 3.25 19.5C3.25 28.4602 10.5398 35.75 19.5 35.75C28.4603 35.75 35.75 28.4602 35.75 19.5C35.75 10.5397 28.4603 3.25 19.5 3.25ZM19.5 32.5C12.3321 32.5 6.5 26.6679 6.5 19.5C6.5 12.3321 12.3321 6.5 19.5 6.5C26.6679 6.5 32.5 12.3321 32.5 19.5C32.5 26.6679 26.6679 32.5 19.5 32.5Z"
                fill="#1DD0D7"
              />
              <path
                d="M21.125 11.375H17.875V20.1727L23.2261 25.5239L25.5239 23.2261L21.125 18.8273V11.375Z"
                fill="#1DD0D7"
              />
            </svg>
            <h3 class="home__subtitle">Dernier Tuto</h3>
          </div>
          <div class="cards">
            <h3 class="cards__titre">{{ listeOrderByDate[0].titre }}</h3>
            <img class="cards__img" :src="listeOrderByDate[0].image" alt="" />
            <h5 class="cards__desc">Note : {{ listeOrderByDate[0].note }}/5</h5>
            <router-link
              class="cards__lien"
              :to="{
                name: 'Module_Tuto',
                params: { id: listeOrderByDate[0].id },
              }"
            >
              <p class="cards__sstitre">Voir le tuto</p>
            </router-link>
          </div>
        </div>

        <svg
          class="home__dash"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#1DD0D7"
          stroke-width="2"
          stoke-height="10"
        >
          <line stroke-dasharray="5, 10" x1="10" y1="30" x2="1000" y2="30" />
        </svg>

        <div class="home__carte">
          <div class="home__head">
            <svg
              class="home__svg"
              width="38"
              height="36"
              viewBox="0 0 38 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.0517 24.0026V11.996C33.0512 11.603 32.9427 11.217 32.7371 10.8764C32.5314 10.5359 32.2357 10.2525 31.8794 10.0547L20.6654 3.83485C20.1252 3.53507 19.5111 3.37714 18.886 3.37714C18.2608 3.37714 17.6468 3.53507 17.1065 3.83485L5.89398 10.0547C5.53771 10.2525 5.24202 10.5359 5.03634 10.8764C4.83067 11.217 4.72218 11.603 4.72168 11.996V24.0026C4.72192 24.3958 4.83029 24.7821 5.03598 25.123C5.24166 25.4638 5.53749 25.7474 5.89398 25.9453L17.108 32.1652C17.6484 32.4645 18.2623 32.6222 18.8874 32.6222C19.5125 32.6222 20.1265 32.4645 20.6669 32.1652L31.8809 25.9453C32.2371 25.7472 32.5326 25.4636 32.7381 25.1227C32.9435 24.7819 33.0516 24.3957 33.0517 24.0026Z"
                stroke="#1B884C"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.09056 10.8274L18.8867 18.5618L32.6828 10.8274"
                stroke="#1B884C"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.8867 32.6243V18.5618"
                stroke="#1B884C"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.8867 11.8125C19.8646 11.8125 20.6573 11.3088 20.6573 10.6875C20.6573 10.0662 19.8646 9.5625 18.8867 9.5625C17.9088 9.5625 17.1161 10.0662 17.1161 10.6875C17.1161 11.3088 17.9088 11.8125 18.8867 11.8125Z"
                fill="#1B884C"
              />
              <path
                d="M15.3454 22.5C15.9974 22.5 16.5259 21.7445 16.5259 20.8125C16.5259 19.8805 15.9974 19.125 15.3454 19.125C14.6935 19.125 14.165 19.8805 14.165 20.8125C14.165 21.7445 14.6935 22.5 15.3454 22.5Z"
                fill="#1B884C"
              />
              <path
                d="M8.26293 24.75C8.91486 24.75 9.44335 23.9945 9.44335 23.0625C9.44335 22.1305 8.91486 21.375 8.26293 21.375C7.611 21.375 7.08251 22.1305 7.08251 23.0625C7.08251 23.9945 7.611 24.75 8.26293 24.75Z"
                fill="#1B884C"
              />
              <path
                d="M22.428 22.5C23.0799 22.5 23.6084 21.7445 23.6084 20.8125C23.6084 19.8805 23.0799 19.125 22.428 19.125C21.776 19.125 21.2475 19.8805 21.2475 20.8125C21.2475 21.7445 21.776 22.5 22.428 22.5Z"
                fill="#1B884C"
              />
              <path
                d="M29.5105 18.5625C30.1624 18.5625 30.6909 17.807 30.6909 16.875C30.6909 15.943 30.1624 15.1875 29.5105 15.1875C28.8585 15.1875 28.33 15.943 28.33 16.875C28.33 17.807 28.8585 18.5625 29.5105 18.5625Z"
                fill="#1B884C"
              />
              <path
                d="M22.428 28.6875C23.0799 28.6875 23.6084 27.932 23.6084 27C23.6084 26.068 23.0799 25.3125 22.428 25.3125C21.776 25.3125 21.2475 26.068 21.2475 27C21.2475 27.932 21.776 28.6875 22.428 28.6875Z"
                fill="#1B884C"
              />
              <path
                d="M29.5105 24.75C30.1624 24.75 30.6909 23.9945 30.6909 23.0625C30.6909 22.1305 30.1624 21.375 29.5105 21.375C28.8585 21.375 28.33 22.1305 28.33 23.0625C28.33 23.9945 28.8585 24.75 29.5105 24.75Z"
                fill="#1B884C"
              />
            </svg>
            <h3 class="home__subtitle">Tuto aléatoire</h3>
          </div>
          <div class="cards">
            <h3 class="cards__titre">{{ listeOrderByRandom[0].titre }}</h3>
            <img class="cards__img" :src="listeOrderByRandom[0].image" alt="" />
            <h5 class="cards__desc">
              Note : {{ listeOrderByRandom[0].note }}/5
            </h5>
            <router-link
              class="cards__lien"
              :to="{
                name: 'Module_Tuto',
                params: { id: listeOrderByRandom[0].id },
              }"
            >
              <p class="cards__sstitre">Voir le tuto</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- fin tuto -->

    <div class="accueil">
      <section class="section --about">
        <img class="section__img" src="../assets/imgs/acceuil1.jpg" alt="#" />
        <h2 class="section__title">Qui sommes-nous ?</h2>
        <p class="section__desc">
          Webby les bons tuyaux est un site web communautaire, mis à jour par la
          communauté. Créé par des étudiants de la grande école du numérique, il
          a pour objectif le partage des meilleurs tutoriels pour aider les
          étudiants et les internautes grâce à un système de notation.
        </p>
        <div class="section__position">
          <div class="section__link">
            <router-link to="/quisommes" class="section__lien">
              En savoir plus ...
            </router-link>
          </div>
        </div>
      </section>

      <section class="section --tuto">
        <img
          class="section__img --tuto__img"
          src="../assets/imgs/acceuil2.jpg"
          alt="#"
        />
        <h2 class="section__title --tuto__title">
          Partagez et notez les tutos
        </h2>
        <p class="section__desc --tuto__desc">
          Les étudiants de la grande école du numérique et du département
          métiers et multimédias de l’internet de l’université de Montbéliard
          vous partagent les tutoriels leur ayant été utiles. A vous de noter
          ces tutoriels pour aider la communauté à choisir celui qui pourra
          l’aider dans son projet.
        </p>
        <div class="section__position --tuto__position">
          <div class="section__link --tuto__link">
            <router-link to="/tuto" class="section__lien --tuto__lien">
              Découvrez nos tutos ...
            </router-link>
          </div>
        </div>
      </section>

      <section class="section --parcours">
        <img class="section__img" src="../assets/imgs/acceuil3.jpg" alt="#" />
        <h2 class="section__title">Suivez notre parcours initiatique</h2>
        <p class="section__desc">
          Si vous souhaitez apprendre les bases du développement mobile tout en
          étant guidé dans votre progression, notre parcours initiatique est
          fait pour vous : lexique de base, apprentissage des premiers langages
          et design sont au programme.
        </p>
        <div class="section__position">
          <div class="section__link">
            <router-link to="/presentation_parcours" class="section__lien">
              Commencez par ici !
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: "Acceuil",
  data() {
    return {
      listeTuto: [],
    };
  },
  computed: {
    listeOrderByNote: function () {
      function compare(a, b) {
        if (a.note < b.note) return 1;
        if (a.note > b.note) return -1;
        return 0;
      }
      return this.listeTuto.sort(compare);
    },
    listeOrderByDate: function () {
      function compare(a, b) {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      }
      return this.listeTuto.sort(compare);
    },
    listeOrderByRandom: function () {
      function compare() {
        let random_id = Math.floor(Math.random() * 3) - 1;
        return random_id;
      }
      return this.listeTuto.sort(compare);
    },
  },
  created() {
    axios({
      method: "get",
      url: param.hostTuto + "/listeTuto",
    })
      .then(
        function (response) {
          this.listeTuto = response.data;
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
</style>