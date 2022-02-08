<template>
    <div>
        <!-- slider -->
        <img src="../assets/imgs/Slider.jpg" alt="#">
        <!-- fin du slider -->

        <!-- liste des tutos -->
        <p>Tuto du mois</p>
        <p>vide</p>
        <p>Dernier Tuto</p>
        <p>vide</p>
        <p>Tuto Aléatoire</p>
        <p>vide</p>
        <!-- fin tuto -->

        <section>
          <img src="../assets/imgs/acceuil1.jpg" alt="#">
          <h2>Qui sommes-nous ? </h2>
          <p>Webby les bons tuyaux est un site web communautaire, mis à jour par la communauté. Créé par des étudiants de la grande école du numérique, il a pour objectif le partage des meilleurs tutoriels pour aider les étudiants et les internautes grâce à un système de notation.</p>
          <router-link to="/quisommes" class="nav__lien"> En savoir plus ... </router-link>
        </section>

        <section>
          <img src="../assets/imgs/acceuil2.jpg" alt="#">
          <h2>Partagez et notez les tutos</h2>
          <p>Les étudiants de la grande école du numérique et du département métiers et multimédias de l’internet de l’université de Montbéliard vous partagent les tutoriels leur ayant été utiles. A vous de noter ces tutoriels pour aider la communauté à choisir celui qui pourra l’aider dans son projet. </p>
          <router-link to="/tuto" class="nav__lien"> Découvrez nos tutos ... </router-link>
        </section>

        <section>
          <img src="../assets/imgs/acceuil3.jpg" alt="#">
          <h2>Suivez notre parcours initiatique</h2>
          <p>Si vous souhaitez apprendre les bases du développement mobile tout en étant guidé dans votre progression, notre parcours initiatique est fait pour vous : lexique de base, apprentissage des premiers langages et design sont au programme. </p>
          <router-link to="/presentation_parcours" class="nav__lien"> Commencez par ici ! </router-link>
        </section>


    </div>
    
</template>

<script>
  export default {
    name: 'Acceuil',
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>