<template>
  <div class="sommaire">
    <h2 class="sommaire__title">Liste des parcours</h2>
    <div class="sommaire__contenu" v-for="parcours in liste" :key="parcours.id">
      <ul class="sommaire__list">
        <li class="sommaire__item">
          <router-link
            class="sommaire__link"
            :to="{ name: 'Parcours', params: { id: parcours.id } }"
          >
            <h3 class="sommaire__mot">{{ parcours.title.rendered }}</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import param from "@/param/param";
export default {
  data() {
    return {
      liste: [],
    };
  },
  created() {
    axios({
      method: "get",
      url: param.host + "parcours",
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