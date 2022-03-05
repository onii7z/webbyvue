<template>
  <div class="sommaire">
    <h2 class="sommaire__title">Lexique</h2>
    <div
      class="sommaire__contenu"
      v-for="lexique in lexiques"
      :key="lexique.id"
    >
      <ul class="sommaire__list">
        <li class="sommaire__item">
          <router-link
            class="sommaire__link"
            :to="{ name: 'Lexique', params: { id: lexique.id } }"
          >
            <h3 class="sommaire__mot">{{ lexique.title.rendered }}</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: "Lexique_Sommaire",
  data() {
    return {
      lexiques: [],
    };
  },
  created() {
    axios({
      method: "get",
      url: param.host + "lexique",
    })
      .then(
        function (response) {
          this.lexiques = response.data;
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
</style>