<template>
  <div class="sommaire">
    <h3 class="sommaire__subtitle">{{ lexique.nom }}</h3>
    <p class="sommaire__desc">{{ lexique.desc }}</p>
    <a class="sommaire__lien" :href="lexique.link">Voir plus</a>
  </div>
</template>

<script>
import param from "@/param/param";
export default {
  name: "Lexique",
  data() {
    return {
      lexique: {
        id: 0,
      },
    };
  },
  created() {
    this.lexique.id = this.$route.params.id;
    axios({
      method: "get",
      url: param.hostTuto + "/listeLexique/" + this.lexique.id,
    })
      .then((response) => {
        this.lexique = response.data;
      })
      .catch((error) => console.log("erreur lexique", error));
  },
};
</script>

<style scoped>
</style>